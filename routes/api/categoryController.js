const router = require('express').Router();
const { ItemGroup, Item } = require('../../models/modelAssociations');

// GET all item groups
router.get('/', async (req, res) => {
  try {
    const itemGroups = await ItemGroup.findAll({ include: [Item] });
    res.json(itemGroups);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve item groups', error: err });
  }
});

// GET a single item group by ID
router.get('/:id', async (req, res) => {
  try {
    const itemGroup = await ItemGroup.findByPk(req.params.id, { include: [Item] });
    if (!itemGroup) {
      return res.status(404).json({ message: 'Item group not found' });
    }
    res.json(itemGroup);
  } catch (err) {
    res.status(400).json({ message: 'Error retrieving item group', error: err });
  }
});

// POST a new item group
router.post('/', async (req, res) => {
  try {
    const newItemGroup = await ItemGroup.create(req.body);
    res.status(201).json(newItemGroup);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create item group', error: err });
  }
});

// PUT (update) an existing item group
router.put('/:id', async (req, res) => {
  try {
    const updatedItemGroup = await ItemGroup.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updatedItemGroup);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update item group', error: err });
  }
});

// DELETE an item group
router.delete('/:id', async (req, res) => {
  try {
    const deletedItemGroup = await ItemGroup.destroy({
      where: { id: req.params.id },
    });
    res.json(deletedItemGroup);
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete item group', error: err });
  }
});

module.exports = router;