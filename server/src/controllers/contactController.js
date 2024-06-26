const Contact = require('../models/Contact');
const { validateContactForm } = require('../validations/contactValidations');

// GET ALL CONTACT FORM MESSAGES
exports.getAllContactMessages = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// POST CONTACT FORM MESSAGE
exports.createContact = async (req, res) => {
  try {
    const { name, mail, message } = req.body;

    // Validate inputs
    const errors = validateContactForm({ name, mail, message });
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        message: 'Validation errors',
        errors,
      });
    }

    const newContact = new Contact({ name, mail, message });
    await newContact.save();
    res.status(201).json({
      message: 'Contact form submitted successfully',
      data: newContact,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// DELETE CONTACT FORM MESSAGE
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact entry not found' });
    }
    res.json({
      message: 'Contact entry deleted successfully',
      data: deletedContact,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
