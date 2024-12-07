function organizeInventory(inventory) {
    let output = {};
    
    for (let i = 0; i < inventory.length; i++) {
      let category = inventory[i].category;
      let name = inventory[i].name;
      let quantity = inventory[i].quantity;
      
      // If the category doesn't exist, initialize it as an empty object
      if (!(category in output)) {
        output[category] = {
          [name]: quantity
        };
        continue
      }
      
      // If the item doesn't exist in the category, initialize it
      if (!(name in output[category])) {
        output[category][name] = quantity;
        continue
      }
      
      // Sum the quantity
      output[category][name] += quantity;
    }
    
    return output;
  }
  
  const inventory = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ];
  
  console.log(organizeInventory(inventory));
  