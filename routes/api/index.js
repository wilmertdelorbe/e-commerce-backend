const router = require('express').Router();
const { Attribute, Item, ItemAttribute, ItemGroup } = require('../../models');

// GET all attributes
router.get('/attributes', async (req, res) => {
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
router.get('/attributes/:id', async (req, res) => {
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
router.post('/attributes', async (req, res) => {
  try {
    const newAttribute = await Attribute.create(req.body);
    res.status(201).json(newAttribute);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create attribute', error: err });
  }
});

// PUT (update) an existing attribute
router.put('/attributes/:id', async (req, res) => {
  try {
    const updatedAttribute = await Attribute.update(req.body, {
      where: { attribute_id: req.params.id },
    });
    res.json(updatedAttribute);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update attribute', error: err });
  }
});

// DELETE an attribute
router.delete('/attributes/:id', async (req, res) => {
  try {
    const deletedAttribute = await Attribute.destroy({
      where: { attribute_id: req.params.id },
    });
    res.json(deletedAttribute);
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete attribute', error: err });
  }
});

// GET all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.findAll({
      include: [{ model: Attribute, through: ItemAttribute }],
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single item by ID
router.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id, {
      include: [{ model: Attribute, through: ItemAttribute }],
    });
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new item
router.post('/items', async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT (update) an existing item
router.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.update(req.body, {
      where: { item_id: req.params.id },
    });
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an item
router.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.destroy({
      where: { item_id: req.params.id },
    });
    res.status(200).json(deletedItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST a new item group
router.post('/itemgroups', async (req, res) => {
  try {
    const newItemGroup = await ItemGroup.create(req.body);
    res.status(201).json(newItemGroup);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create item group', error: err });
  }
});

module.exports = router;