import { useState } from 'react'
import imgCremeCaramel from '../assets/creme-caramel.png'
import imgBlackForest from '../assets/black-forest.png'
import imgEclairs from '../assets/eclairs-2.png'
import imgPBCookies from '../assets/peanut-butter-cookies.jpg'
import imgChocChip from '../assets/choclate-chip-cookie.png'
import imgSmores from '../assets/cookies.png'
import imgApplePie from '../assets/apple-pie.png'
import imgBananaMuffins from '../assets/choclate-banana-muffins.png'
import imgPullApart from '../assets/sourdough-bread-loaf.png'
import imgGarlicKnots from '../assets/dinner-rolls.png'
import imgFoccacia from '../assets/foccacia-1.png'
import imgFoccacia2 from '../assets/foccacia-2.png'
import imgKharaFoccacia from '../assets/khara-foccacia.png'
import imgKharaFoccacia1 from '../assets/khara-foccacia-1.png'
import imgPestFoccacia from '../assets/pest-foccacia.png'
import imgPestoFoccacia from '../assets/pesto-foccacia.png'
import imgSwissRoll from '../assets/swiss-roll.png'
import imgVanillaCake from '../assets/vanila-cake-frosting.png'
import imgLemonLoaf from '../assets/lemon-loaf.png'
import imgBreadPudding from '../assets/breadpudding.png'
import imgBranMuffin from '../assets/bran-miffin.png'
import imgFruitCustard from '../assets/fruit-custard.png'
import imgFruitCustard1 from '../assets/fruit-custard-1.png'

const recipes = [
  {
    name: 'Crème Caramel',
    tag: 'Dessert',
    bg: '#C4845A',
    img: imgCremeCaramel,
    desc: "A silky, wobbly custard with a deep amber caramel. My all-time favourite and the one I've made more times than I can count.",
    serves: '6',
    time: '1 hr + chill',
    ingredients: [
      '200g sugar (for caramel)',
      '4 eggs + 2 yolks',
      '500ml whole milk',
      '200ml heavy cream',
      '80g sugar',
      '1 tsp vanilla extract',
      'Pinch of salt',
    ],
    steps: [
      'Preheat oven to 160°C. Set a deep baking dish aside for the water bath.',
      'Make the caramel: heat 200g sugar in a dry pan over medium heat, swirling gently, until deep amber. Pour immediately into 6 ramekins and swirl to coat bases.',
      'Warm milk and cream together until just steaming — do not boil.',
      'Whisk eggs, yolks, 80g sugar, vanilla and salt until smooth. Slowly stream in the warm milk, whisking constantly.',
      'Strain the custard through a fine sieve. Skim any foam from the surface.',
      'Pour into the prepared ramekins. Place ramekins in the baking dish and fill with hot water to halfway up the sides.',
      'Bake 40–45 min until the edges are set but the centre still jiggles like jelly.',
      'Cool to room temperature, then refrigerate at least 4 hours (overnight is better).',
      'To serve: run a thin knife around the edge and invert onto a plate. The caramel will run down beautifully.',
    ],
  },
  {
    name: 'Black Forest Cake',
    tag: 'Cake',
    bg: '#3B2A2A',
    img: imgBlackForest,
    desc: 'Dark chocolate sponge, kirsch-soaked cherries, and mountains of whipped cream. Classic and unapologetically rich.',
    serves: '10–12',
    time: '2 hrs',
    ingredients: [
      '200g dark chocolate (70%)',
      '200g butter',
      '200g caster sugar',
      '4 eggs',
      '150g plain flour',
      '40g cocoa powder',
      '1 tsp baking powder',
      '400g cherries (fresh or jarred), pitted',
      '3 tbsp kirsch (or cherry juice)',
      '500ml double cream',
      '3 tbsp icing sugar',
      'Chocolate shavings to decorate',
    ],
    steps: [
      'Preheat oven to 175°C. Grease and line two 20cm cake tins.',
      'Melt chocolate and butter together. Cool slightly.',
      'Whisk sugar and eggs until pale and thick. Fold in chocolate mixture.',
      'Sift in flour, cocoa and baking powder. Fold gently until just combined.',
      'Divide between the tins and bake 25–30 min. Cool completely on a wire rack.',
      'Halve the cherries. Toss with kirsch and leave to macerate for 20 minutes.',
      'Whip cream with icing sugar to soft peaks.',
      'Place one sponge on a board. Spread with a generous layer of cream, then scatter over half the cherries.',
      'Top with the second sponge. Cover the whole cake in remaining cream.',
      'Decorate with remaining cherries and a generous pile of chocolate shavings.',
    ],
  },
  {
    name: 'Éclairs',
    tag: 'Pastry',
    bg: '#6B5044',
    img: imgEclairs,
    desc: 'Light choux pastry filled with vanilla pastry cream and finished with a glossy chocolate glaze. Delicate and completely addictive.',
    serves: '12',
    time: '1.5 hrs',
    ingredients: [
      '240ml water',
      '115g unsalted butter',
      '1 tsp sugar',
      '½ tsp salt',
      '145g plain flour',
      '4 large eggs',
      '500ml whole milk',
      '4 egg yolks',
      '100g sugar',
      '40g cornflour',
      '1 tsp vanilla',
      '200g dark chocolate',
      '100ml cream (for glaze)',
    ],
    steps: [
      'Make the pastry cream: heat milk until steaming. Whisk yolks, sugar and cornflour in a bowl. Slowly pour in hot milk, whisking constantly. Return to pan and cook over medium heat, stirring, until thick. Add vanilla. Press cling film directly on surface and chill.',
      'Preheat oven to 200°C. Line two baking sheets.',
      'Make choux: bring water, butter, sugar and salt to a full boil. Add flour all at once and beat vigorously with a wooden spoon until dough pulls away from the sides and forms a smooth ball.',
      'Let dough cool 5 minutes. Beat in eggs one at a time until dough is glossy and holds a soft peak.',
      'Pipe 12cm lengths onto the baking sheets using a round or star nozzle.',
      'Bake 20 min until deep golden and hollow-sounding. Do not open the oven early. Cool on a rack.',
      'Make ganache: heat cream until simmering, pour over chopped chocolate, stir until smooth.',
      'Fill the éclairs by piping pastry cream through 2–3 small holes in the base.',
      'Dip the tops in ganache and set on a rack until glaze firms up.',
    ],
  },
  {
    name: 'Peanut Butter Cookies',
    tag: 'Cookie',
    bg: '#C8A96E',
    img: imgPBCookies,
    desc: 'Dense, rich, properly peanut-buttery. The kind with the fork crosshatch on top because it just feels right.',
    serves: '24',
    time: '30 min',
    ingredients: [
      '250g smooth peanut butter',
      '200g caster sugar',
      '1 large egg',
      '1 tsp vanilla extract',
      '½ tsp baking soda',
      'Pinch of salt',
      'Extra sugar for rolling',
    ],
    steps: [
      'Preheat oven to 175°C. Line two baking sheets.',
      'Beat peanut butter, sugar, egg, vanilla, baking soda and salt together until a stiff dough forms.',
      'Roll tablespoon-sized balls of dough and coat in extra sugar.',
      'Place on baking sheets with room to spread. Flatten each with a fork, pressing a crosshatch pattern.',
      'Bake 10–12 min until the edges are just set — they will firm up as they cool.',
      'Cool on the tray for 5 minutes before transferring.',
    ],
  },
  {
    name: 'Chocolate Chip Cookies',
    tag: 'Cookie',
    bg: '#7B4F2E',
    img: imgChocChip,
    desc: 'Brown butter, extra yolk, rested overnight. The result is crispy edges, a chewy centre, and pools of chocolate in every bite.',
    serves: '18',
    time: '30 min + rest',
    ingredients: [
      '170g unsalted butter',
      '200g brown sugar',
      '100g caster sugar',
      '1 egg + 1 yolk',
      '2 tsp vanilla extract',
      '270g plain flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '300g dark chocolate chips or chopped chocolate',
      'Flaky sea salt for topping',
    ],
    steps: [
      'Brown the butter in a saucepan over medium heat, swirling until golden and nutty-smelling. Pour into a large bowl and cool 10 minutes.',
      'Whisk in both sugars until combined. Add egg, yolk and vanilla — whisk until the mixture is smooth and ribbony.',
      'Stir in flour, baking soda and salt until just combined. Fold in chocolate.',
      'Cover and refrigerate for at least 1 hour — overnight gives the best flavour.',
      'Preheat oven to 175°C. Scoop dough into balls (about 50g each) onto lined baking sheets.',
      'Bake 11–13 min until golden at the edges but still soft in the centre.',
      'Immediately press a few extra chocolate chips on top if you like. Sprinkle with flaky salt.',
      'Cool on the tray 10 minutes — they firm up a lot as they cool.',
    ],
  },
  {
    name: 'Butter Cookies',
    tag: 'Cookie',
    bg: '#4A3728',
    img: imgSmores,
    desc: 'Graham cracker base, toasted marshmallow, pools of dark chocolate. Everything good about a campfire in cookie form.',
    serves: '16',
    time: '40 min',
    ingredients: [
      '115g unsalted butter, softened',
      '100g brown sugar',
      '50g caster sugar',
      '1 egg',
      '1 tsp vanilla',
      '150g plain flour',
      '80g crushed graham crackers',
      '½ tsp baking soda',
      '½ tsp salt',
      '150g dark chocolate chips',
      '100g mini marshmallows',
    ],
    steps: [
      'Preheat oven to 175°C. Line two baking sheets.',
      'Beat butter and sugars until light. Add egg and vanilla.',
      'Mix in flour, crushed graham crackers, baking soda and salt.',
      'Fold in chocolate chips.',
      'Scoop into balls onto the sheets. Press a few marshmallows on top of each.',
      'Bake 10–11 min until golden at the edges. The marshmallows will be puffed and golden.',
      'Cool on the tray — the marshmallows will sink slightly and toast as they cool.',
    ],
  },
  {
    name: 'Apple Pie',
    tag: 'Pie',
    bg: '#B87040',
    img: imgApplePie,
    desc: 'Buttery all-butter crust, cinnamon-spiced apple filling with a hint of cardamom. The filling is properly jammy, not watery.',
    serves: '8',
    time: '2.5 hrs',
    ingredients: [
      '300g plain flour',
      '200g cold unsalted butter, cubed',
      '1 tsp salt',
      '2 tsp sugar',
      '6–8 tbsp ice water',
      '1kg Granny Smith apples, peeled and sliced',
      '150g sugar',
      '2 tbsp plain flour',
      '1.5 tsp cinnamon',
      '¼ tsp cardamom',
      '¼ tsp nutmeg',
      '1 tbsp lemon juice',
      '1 egg + 1 tbsp milk (egg wash)',
      'Demerara sugar for topping',
    ],
    steps: [
      'Make the pastry: pulse flour, salt and sugar in a food processor. Add cold butter and pulse until it resembles coarse breadcrumbs. Add ice water one tbsp at a time until dough just comes together.',
      'Divide in two, flatten into discs, wrap and refrigerate for 1 hour.',
      'Toss apple slices with sugar, flour, spices and lemon juice. Leave 20 minutes so juices release.',
      'Preheat oven to 220°C.',
      'Roll one disc to line a 23cm pie dish. Trim edges leaving a 2cm overhang.',
      'Fill with the apple mixture, mounding slightly in the centre.',
      'Roll the second disc and lay over the top. Trim and crimp edges together to seal. Cut a few steam vents.',
      'Brush with egg wash and sprinkle generously with demerara sugar.',
      'Bake at 220°C for 20 min, then reduce to 190°C and bake a further 35–40 min until deep golden and juices bubble through the vents.',
      'Cool at least 2 hours before slicing so the filling sets.',
    ],
  },
  {
    name: 'Banana Chocolate Muffins',
    tag: 'Muffin',
    bg: '#5C4033',
    img: imgBananaMuffins,
    desc: 'Super moist, deeply banana-y, with pockets of dark chocolate throughout. The riper the bananas the better.',
    serves: '12',
    time: '35 min',
    ingredients: [
      '3 very ripe bananas (about 300g mashed)',
      '100g unsalted butter, melted',
      '150g brown sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '200g plain flour',
      '1 tsp baking powder',
      '½ tsp baking soda',
      '½ tsp salt',
      '1 tsp cinnamon',
      '150g dark chocolate chips',
    ],
    steps: [
      'Preheat oven to 190°C. Line a 12-hole muffin tin.',
      'Mash bananas thoroughly. Stir in melted butter, sugar, eggs and vanilla.',
      'Fold in flour, baking powder, baking soda, salt and cinnamon until just combined — a few lumps are fine.',
      'Fold in chocolate chips, saving a small handful for topping.',
      'Divide between the muffin cases. Press reserved chips on top.',
      'Bake 18–22 min until a skewer comes out clean.',
      'Cool in the tin 10 minutes, then transfer to a wire rack.',
    ],
  },
  {
    name: 'White Loaf',
    tag: 'Bread',
    bg: '#C4A040',
    img: imgPullApart,
    desc: 'Soft, pillowy rolls baked together and stuffed with melted cheese. Impossibly satisfying to pull apart at the table.',
    serves: '8–10',
    time: '2.5 hrs',
    ingredients: [
      '450g strong white bread flour',
      '7g instant yeast',
      '10g salt',
      '1 tbsp sugar',
      '250ml warm milk',
      '2 eggs',
      '60g butter, softened',
      '200g gruyère or cheddar, grated',
      '1 egg (egg wash)',
      'Extra cheese for topping',
    ],
    steps: [
      'Combine flour, yeast, salt, sugar. Add warm milk and eggs, mix to a shaggy dough.',
      'Knead on a floured surface for 8 min until smooth. Add softened butter in small pieces and knead in until fully incorporated.',
      'Place in an oiled bowl, cover, and prove 1 hour or until doubled.',
      'Punch down the dough. Divide into 16 equal pieces. Flatten each piece, add a pinch of cheese, and form into a tight ball, sealing the cheese inside.',
      'Arrange the balls in a 23cm buttered round cake tin or baking dish, packing them tightly. Scatter extra cheese between and over the balls.',
      'Cover and prove 45 min until puffed.',
      'Preheat oven to 180°C. Brush with egg wash.',
      'Bake 25–30 min until deep golden. Cool 10 min in the tin before serving.',
    ],
  },
  {
    name: 'Dinner Rolls',
    tag: 'Bread',
    bg: '#A08050',
    img: imgGarlicKnots,
    desc: 'Soft, garlicky, brushed with herbed butter and finished with parmesan. They disappear in minutes.',
    serves: '16',
    time: '2 hrs',
    ingredients: [
      '400g plain flour',
      '7g instant yeast',
      '8g salt',
      '1 tsp sugar',
      '240ml warm water',
      '2 tbsp olive oil',
      '80g unsalted butter',
      '5 garlic cloves, minced',
      '3 tbsp fresh parsley, chopped',
      '½ tsp salt',
      '50g parmesan, finely grated',
    ],
    steps: [
      'Mix flour, yeast, salt and sugar. Add warm water and olive oil. Knead 8 min until smooth and elastic.',
      'Place in an oiled bowl, cover and prove 1 hour until doubled.',
      'Punch down. Divide into 16 pieces. Roll each piece into a 20cm rope and tie into a loose knot, tucking the ends under.',
      'Place on lined baking sheets. Cover and prove 30 min.',
      'Preheat oven to 200°C.',
      'Bake 14–16 min until golden.',
      'While they bake, melt butter with garlic over low heat. Cook 2 min until fragrant. Stir in parsley and salt.',
      'Brush hot knots generously with the garlic butter. Finish with a shower of parmesan.',
    ],
  },
  {
    name: 'Herb Focaccia',
    tag: 'Bread',
    bg: '#7A6040',
    img: imgFoccacia,
    modalImg: imgFoccacia2,
    desc: 'Pillowy, olive-oil-drenched flatbread dimpled and scattered with rosemary and flaky salt. Crisp outside, cloud-like inside.',
    serves: '8–10',
    time: '2.5 hrs',
    ingredients: [
      '500g strong white bread flour',
      '7g instant yeast',
      '10g salt',
      '1 tsp sugar',
      '380ml warm water',
      '6 tbsp good olive oil, divided',
      '2 tbsp fresh rosemary leaves',
      'Flaky sea salt',
    ],
    steps: [
      'Mix flour, yeast, salt and sugar. Add warm water and 2 tbsp olive oil. Mix to a shaggy dough, then knead 8 min until smooth.',
      'Pour 2 tbsp olive oil into a large baking tin (30×40cm). Add dough, turn to coat, and stretch gently to the edges. Cover and rest 10 min.',
      'Using oiled fingers, dimple the dough aggressively all over — right to the base. Drizzle with 2 more tbsp olive oil.',
      'Scatter rosemary over the top, pressing gently into the dimples. Cover loosely and prove 45 min–1 hr until puffed.',
      'Preheat oven to 220°C.',
      'Just before baking, dimple once more and scatter generously with flaky salt.',
      'Bake 20–25 min until deep golden and the edges pull away from the tin.',
      'Cool in the tin 10 min before slicing. Best eaten the day it\'s made.',
    ],
  },
  {
    name: 'Khara Focaccia',
    tag: 'Bread',
    bg: '#5C3A1A',
    img: imgKharaFoccacia,
    modalImg: imgKharaFoccacia1,
    desc: 'An Indian-spiced twist on the classic — topped with caramelised onion, green chillies, coriander and a drizzle of chilli oil. Khara means spicy.',
    serves: '8–10',
    time: '2.5 hrs',
    ingredients: [
      '500g strong white bread flour',
      '7g instant yeast',
      '10g salt',
      '1 tsp sugar',
      '380ml warm water',
      '6 tbsp olive oil, divided',
      '1 large onion, thinly sliced',
      '2–3 green chillies, sliced',
      '1 tsp cumin seeds',
      '½ tsp turmeric',
      'Large handful of fresh coriander',
      'Chilli flakes and flaky salt, to finish',
    ],
    steps: [
      'Fry sliced onion in 1 tbsp oil over medium heat for 15 min until golden. Add cumin seeds, green chillies and turmeric. Cook 2 min. Set aside to cool.',
      'Mix flour, yeast, salt and sugar. Add warm water and 2 tbsp olive oil. Knead 8 min until smooth.',
      'Oil a large baking tin with 2 tbsp olive oil. Add dough, turn to coat, and stretch to the edges. Cover and rest 10 min.',
      'Dimple the dough all over with oiled fingers. Drizzle with remaining olive oil.',
      'Spread the spiced onion mixture evenly over the surface. Cover and prove 45 min.',
      'Preheat oven to 220°C. Scatter coriander, chilli flakes and flaky salt over the top just before baking.',
      'Bake 20–25 min until golden and fragrant.',
      'Cool 10 min before slicing. Incredible with a cup of chai.',
    ],
  },
  {
    name: 'Pesto Focaccia',
    tag: 'Bread',
    bg: '#3A5C2E',
    img: imgPestFoccacia,
    modalImg: imgPestoFoccacia,
    desc: 'Swirled with vibrant basil pesto, studded with jammy cherry tomatoes and pine nuts. Best eaten still warm.',
    serves: '8–10',
    time: '2.5 hrs',
    ingredients: [
      '500g strong white bread flour',
      '7g instant yeast',
      '10g salt',
      '1 tsp sugar',
      '380ml warm water',
      '4 tbsp olive oil, divided',
      '4–5 tbsp good pesto',
      '150g cherry tomatoes, halved',
      '30g pine nuts',
      'Fresh basil leaves',
      'Flaky salt',
    ],
    steps: [
      'Mix flour, yeast, salt and sugar. Add warm water and 2 tbsp olive oil. Knead 8 min until smooth.',
      'Oil a large baking tin with 2 tbsp olive oil. Add dough, stretch to the edges. Cover and rest 10 min.',
      'Dimple the dough generously with oiled fingers. Drizzle with a little extra olive oil.',
      'Drop teaspoons of pesto into the dimples, spreading gently. Press cherry tomatoes cut side up into the dough. Scatter pine nuts.',
      'Cover and prove 45 min until puffy.',
      'Preheat oven to 220°C. Scatter flaky salt before baking.',
      'Bake 20–25 min until golden and the tomatoes are jammy.',
      'Remove from oven. Scatter fresh basil immediately. Cool 10 min in the tin before serving.',
    ],
  },
  {
    name: 'Swiss Roll',
    tag: 'Cake',
    bg: '#8B4A3A',
    img: imgSwissRoll,
    desc: 'A light-as-air sponge rolled around clouds of whipped cream and sharp strawberry jam. Deceptively elegant, surprisingly easy.',
    serves: '8',
    time: '45 min',
    ingredients: [
      '4 eggs',
      '120g caster sugar',
      '120g plain flour',
      '1 tsp baking powder',
      '1 tsp vanilla extract',
      'Pinch of salt',
      '300ml double cream',
      '2 tbsp icing sugar',
      '4 tbsp strawberry jam',
      'Extra icing sugar for dusting',
    ],
    steps: [
      'Preheat oven to 200°C. Line a 33×23cm Swiss roll tin with baking paper.',
      'Whisk eggs and caster sugar with an electric mixer for 5–7 min until pale, thick and tripled in volume.',
      'Sift flour, baking powder and salt over the egg mixture. Add vanilla. Fold gently with a large metal spoon — keep as much air as possible.',
      'Pour into the prepared tin and spread to the corners. Bake 10–12 min until golden and springy to the touch.',
      'While it bakes, lay a sheet of baking paper on a clean surface and dust generously with icing sugar.',
      'Turn the hot sponge out onto the sugared paper. Peel off the lining paper. Roll the sponge up tightly from the short end, with the sugared paper inside. Leave to cool completely.',
      'Whip cream and icing sugar to soft peaks.',
      'Unroll the sponge carefully. Spread with jam, then whipped cream, leaving a 2cm border.',
      'Re-roll tightly without the paper. Dust with icing sugar and refrigerate 30 min before slicing.',
    ],
  },
  {
    name: 'Vanilla Cake with Whipped Cream Frosting',
    tag: 'Cake',
    bg: '#C8A878',
    dark: true,
    img: imgVanillaCake,
    desc: 'A classic vanilla layer cake — tender crumb, real vanilla bean, finished with billowy whipped cream frosting. Simple done beautifully.',
    serves: '10–12',
    time: '1.5 hrs',
    ingredients: [
      '300g plain flour',
      '2 tsp baking powder',
      '½ tsp salt',
      '200g unsalted butter, softened',
      '300g caster sugar',
      '4 eggs',
      '2 tsp vanilla extract or 1 vanilla bean',
      '180ml whole milk',
      '180ml sour cream',
      '500ml double cream (frosting)',
      '4 tbsp icing sugar (frosting)',
      '1 tsp vanilla extract (frosting)',
    ],
    steps: [
      'Preheat oven to 175°C. Grease and line two 20cm round cake tins.',
      'Whisk flour, baking powder and salt together. Set aside.',
      'Beat butter and sugar until pale and fluffy, about 5 min. Add eggs one at a time, beating well after each. Add vanilla.',
      'Combine milk and sour cream. Alternately fold dry ingredients and milk mixture into the butter mixture, beginning and ending with flour.',
      'Divide between tins. Bake 28–32 min until a skewer comes out clean. Cool in tins 10 min, then turn out and cool completely.',
      'For the frosting: whip cold double cream, icing sugar and vanilla to firm peaks.',
      'Place one cake layer on a plate. Spread a generous layer of frosting. Top with second layer.',
      'Frost the top and sides. Swirl the top for texture. Refrigerate at least 1 hour before slicing.',
    ],
  },
  {
    name: 'Lemon Loaf',
    tag: 'Cake',
    bg: '#C8B84A',
    dark: true,
    img: imgLemonLoaf,
    desc: "Bright, zingy, moist. A lemon drizzle loaf that punches well above its weight — glossy lemon glaze soaks right in while it's still warm.",
    serves: '8–10',
    time: '1 hr',
    ingredients: [
      '200g plain flour',
      '1½ tsp baking powder',
      '¼ tsp salt',
      '150g caster sugar',
      'Zest of 2 lemons',
      '3 eggs',
      '120ml vegetable oil',
      '100ml whole milk',
      '2 tbsp lemon juice',
      '80g icing sugar (glaze)',
      '2–3 tbsp lemon juice (glaze)',
    ],
    steps: [
      'Preheat oven to 175°C. Grease and line a 900g loaf tin.',
      'Rub lemon zest into caster sugar until fragrant and sandy.',
      'Whisk eggs into the lemon sugar until pale. Add oil, milk and lemon juice. Mix well.',
      "Fold in flour, baking powder and salt until just combined — don't overmix.",
      'Pour into the prepared tin. Bake 45–50 min until a skewer comes out clean and the top is cracked and golden.',
      'While the loaf bakes, mix icing sugar and lemon juice to a runny glaze.',
      'As soon as the loaf comes out of the oven, poke all over with a skewer and pour the glaze on top. Let it soak in.',
      'Cool in the tin 15 min, then lift out and cool fully on a rack.',
    ],
  },
  {
    name: 'Bread Pudding',
    tag: 'Dessert',
    bg: '#6B4A2E',
    img: imgBreadPudding,
    desc: 'Old-fashioned, custardy, and deeply comforting. Day-old brioche soaked in a rich vanilla custard, baked until golden and served warm.',
    serves: '6–8',
    time: '1 hr',
    ingredients: [
      '400g day-old brioche or white bread, cubed',
      '4 eggs',
      '350ml whole milk',
      '200ml double cream',
      '100g caster sugar',
      '2 tsp vanilla extract',
      '1 tsp cinnamon',
      'Pinch of nutmeg',
      '40g unsalted butter, melted',
      '2 tbsp demerara sugar (topping)',
    ],
    steps: [
      'Grease a 20×30cm baking dish. Scatter the bread cubes evenly inside.',
      'Whisk eggs, milk, cream, sugar, vanilla, cinnamon and nutmeg together. Pour over the bread. Press the bread down gently so every cube is soaked. Rest 30 min (or overnight in the fridge).',
      'Preheat oven to 175°C.',
      'Drizzle melted butter over the top. Scatter demerara sugar for crunch.',
      'Bake 40–45 min until the custard is set and the top is deep golden and slightly crisp.',
      'Cool 10 min before serving. Wonderful with a scoop of vanilla ice cream or a pour of cream.',
    ],
  },
  {
    name: 'Bran Muffins',
    tag: 'Muffin',
    bg: '#7A5A3A',
    img: imgBranMuffin,
    desc: 'Dense, nutty, not-too-sweet. Packed with wheat bran, honey and a handful of raisins. The kind of muffin that feels virtuous but actually tastes good.',
    serves: '12',
    time: '35 min',
    ingredients: [
      '200g wheat bran',
      '240ml buttermilk',
      '120ml vegetable oil',
      '2 eggs',
      '80g honey or brown sugar',
      '1 tsp vanilla extract',
      '120g plain flour',
      '1½ tsp baking powder',
      '½ tsp baking soda',
      '½ tsp salt',
      '1 tsp cinnamon',
      '100g raisins or chopped dates',
    ],
    steps: [
      'Preheat oven to 190°C. Line a 12-hole muffin tin.',
      'Combine wheat bran and buttermilk in a large bowl. Let soak 10 min.',
      'Stir in oil, eggs, honey and vanilla.',
      'Fold in flour, baking powder, baking soda, salt and cinnamon until just combined.',
      'Fold in raisins.',
      'Divide between muffin cases — fill to the top for tall, bakery-style muffins.',
      'Bake 18–22 min until a skewer comes out clean.',
      'Cool 5 min in the tin, then transfer to a rack. Best eaten slightly warm.',
    ],
  },
  {
    name: 'Fruit Custard',
    tag: 'Dessert',
    bg: '#C4845A',
    img: imgFruitCustard1,
    modalImg: imgFruitCustard,
    desc: 'A nostalgic Indian-style dessert — cold, silky vanilla custard layered with fresh seasonal fruit. The one that ends every family dinner.',
    serves: '6',
    time: '30 min + chill',
    ingredients: [
      '1 litre whole milk',
      '4 tbsp custard powder',
      '6 tbsp sugar',
      '1 tsp vanilla extract',
      '2 bananas, sliced',
      '1 apple, diced',
      '1 cup grapes, halved',
      '1 cup pomegranate seeds',
      '2 oranges, segmented',
      'Any seasonal fruit you like',
    ],
    steps: [
      'Mix custard powder with 4 tbsp of cold milk until smooth — no lumps.',
      'Heat the remaining milk with sugar in a saucepan over medium heat, stirring, until it just comes to a simmer.',
      'Pour a little hot milk into the custard mixture, stir well, then pour everything back into the pan.',
      'Cook over low heat, stirring constantly, until the custard thickens enough to coat the back of a spoon — about 5 min.',
      'Remove from heat. Stir in vanilla. Pour into a bowl and press cling film directly onto the surface to prevent a skin forming.',
      'Refrigerate until cold, at least 2 hours.',
      'Prepare all the fruit just before serving.',
      'Layer the cold custard with the fruit in a large bowl or individual glasses. Serve immediately.',
    ],
  },
]

export default function Recipes() {
  const [selected, setSelected] = useState(null)

  const closeModal = () => setSelected(null)

  return (
    <>
      <div className="checker-bar" aria-hidden="true"></div>
      <div className="ticker-wrap">
        <div className="ticker-track">
          <span>FRESHLY BAKED</span><span className="t-dot">✦</span>
          <span>BAKED WITH FRESHNESS</span><span className="t-dot">✦</span>
          <span>MADE FROM SCRATCH</span><span className="t-dot">✦</span>
          <span>SMALL BATCH</span><span className="t-dot">✦</span>
          <span>NO SHORTCUTS</span><span className="t-dot">✦</span>
          <span>MADE WITH LOVE</span><span className="t-dot">✦</span>
          <span>FRESHLY BAKED</span><span className="t-dot">✦</span>
          <span>BAKED WITH FRESHNESS</span><span className="t-dot">✦</span>
          <span>MADE FROM SCRATCH</span><span className="t-dot">✦</span>
          <span>SMALL BATCH</span><span className="t-dot">✦</span>
          <span>NO SHORTCUTS</span><span className="t-dot">✦</span>
          <span>MADE WITH LOVE</span><span className="t-dot">✦</span>
        </div>
      </div>
      <div className="checker-bar checker-bar--flipped" aria-hidden="true"></div>

      <section className="section products-section" id="recipes">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Made from Scratch</p>
            <h2>Recipes</h2>
          </div>
          <p className="menu-intro">
            Everything here is baked with freshness front of mind — no shortcuts, nothing sitting on a shelf overnight.
            Click any card to see the full recipe.
          </p>
          <div className="recipes-grid">
            {recipes.map((r) => (
              <button
                key={r.name}
                className={'recipe-card' + (r.dark ? ' recipe-card--dark-text' : '')}
                onClick={() => setSelected(r)}
                aria-label={'Open ' + r.name + ' recipe'}
              >
                <div className="recipe-card-img-wrap">
                  <img src={r.img} alt={r.name} className="recipe-card-img" />
                </div>
                <div className="recipe-card-info" style={{ background: r.bg }}>
                  <span className="recipe-card-tag">{r.tag}</span>
                  <h3 className="recipe-card-name">{r.name}</h3>
                  <p className="recipe-card-desc">{r.desc}</p>
                  <span className="recipe-card-cta">View Recipe →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-label={selected.name + ' recipe'}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>

            <div className="modal-hero">
              <img src={selected.modalImg || selected.img} alt={selected.name} className="modal-hero-img" />
              <div className="modal-hero-text" style={{ background: selected.bg }}>
                <span className="modal-tag">{selected.tag}</span>
                <h2 className={'modal-title' + (selected.dark ? ' modal-title--dark' : '')}>{selected.name}</h2>
                <div className={'modal-meta' + (selected.dark ? ' modal-meta--dark' : '')}>
                  <span>Serves {selected.serves}</span>
                  <span className="modal-meta-dot">·</span>
                  <span>{selected.time}</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selected.desc}</p>

              <div className="modal-columns">
                <div className="modal-ingredients">
                  <h4>Ingredients</h4>
                  <ul>
                    {selected.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-steps">
                  <h4>Method</h4>
                  <ol>
                    {selected.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <button className="modal-close-bottom" onClick={closeModal}>
                Close Recipe
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
