const router = require('express').Router();
const { Attribute, Item, ItemAttribute } = require('../../models/modelAssociations');

// GET all attributes
router.get('/', async (req, res) => {
  try {
    const attributes = await Attribute.findAll({
      include: [
        {
          model: Item,
          through: ItemAttribute,
        },
      ],
    });
    res.json(attributes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve attributes', error: err });
  }
});

// GET a single attribute by ID
router.get('/:id', async (req, res) => {
  try {
    const attribute = await Attribute.findByPk(req.params.id, {
      include: [
        {
          model: Item,
          through: ItemAttribute,
        },
      ],
    });
    if (!attribute) {
      return res.status(404).json({ message: 'Attribute not found' });
    }
    res.json(attribute);
  } catch (err) {
    res.status(404).json({ message: 'Error retrieving attribute', error: err });
  }
});

// POST a new attribute
router.post('/', async (req, res) => {
  try {
    const newAttribute = await Attribute.create(req.body);
    res.status(201).json(newAttribute);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create attribute', error: err });
  }
});

// PUT (update) an existing attribute
router.put('/:id', async (req, res) => {
  try {
    const updatedAttribute = await Attribute.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updatedAttribute);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update attribute', error: err });
  }
});

// DELETE an attribute
router.delete('/:id', async (req, res) => {
  try {
    const deletedAttribute = await Attribute.destroy({
      where: { id: req.params.id },
    });
    res.json(deletedAttribute);
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete attribute', error: err });
  }
});

module.exports = router;