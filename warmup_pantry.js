var home = {
    kitchen: {
      pantry: [
        {
          label: 'hemp seeds',
          cost: 12
        },
        {
          label: 'flour',
          cost: 4
        },
        {
          label: 'nutella',
          cost: 5
        },
        {
          label: 'honey',
          cost: 8
        },
        {
          label: 'oats',
          cost: 4
        }
      ],
   
      bench: [
        {
          brand: 'vitamix',
          color: 'red'
        },
        {
          brand: 'kitchenaid',
          color: 'white'
        },
        {
          brand: 'breville',
          color: 'black'
        },
      ],
   
      fridge: [
        {
          name: 'no frills pudding from wollies',
          comment: 'taste great',
          ingredients: ['sugar', 'preservatives', 'vomit']
        }
      ]
    }
   }
home.kitchen.fridge[0].comment = 'taste like vomit';
let sum = 0;
for (let counter = 0; counter < home.kitchen.pantry.length; counter ++) {
    sum += home.kitchen.pantry[counter].cost;       
}
console.log (`Total cost of pantry items: $${sum}`);
