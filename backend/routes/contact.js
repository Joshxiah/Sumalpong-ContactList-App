const express = require("express");
const router = express.Router();

let contacts = [
  {
    id: 1,
    name: "Jhoana Marie S. Sumalpong",
    email: "joshxiasumalpong@gmail.com",
    phone: "0938-394-5849",
  },
  {
    id: 2,
    name: "Virlyn Sandialan",
    email: "sandialanvirlyn@gmail.com",
    phone: "0953-200-2272",
  },
  {
    id: 3,
    name: "Baby Mae Ploma",
    email: "plomababymae19@gmail.com",
    phone: "0995-913-7664",
  },
];

// Get all contacts
router.get("/", (req, res) => res.json(contacts));

// Add a contact
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = { id: Date.now(), name, email, phone };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Delete a contact
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  contacts = contacts.filter((contact) => contact.id !== parseInt(id));
  res.status(200).json({ message: "Contact deleted" });
});

module.exports = router;
