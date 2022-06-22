# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create(username: 'BigBalla69', password: '123', balance: 10000.00)
u2 = User.create(username: 'CharizardFan420', password: '123', balance: 5000.00)
u3 = User.create(username: 'Shill Bidder', password: '123', balance: 20000.00)
u4 = User.create(username: 'Window Shopper', password: '123', balance: 0.00)
u5 = User.create(username: 'Dubloon Smuggler', password: '123', balance: 0.00)
u6 = User.create(username: 'Shill Bidders brother', password: '123', balance: 20000.00)
 

i1 = Item.create(title: 'Charizard card', description: '20 years old',item_tag:'Pokemon', user_id: u2.id)
i2 = Item.create(title: 'Gucci handbag', description: 'light stains and scratches',item_tag:'handbags', user_id: u1.id)
i3 = Item.create(title: 'Sneakers', description: 'Only worn 3 times',item_tag:'Footwear', user_id: u5.id)
i4 = Item.create(title: 'PCGS PR70DCAM Gold Eagle', description: 'Please DM before purchasing or I may cancel your order.',item_tag:'Pokemon', user_id: u5.id)
i5 = Item.create(title: '2020-2021 Panini Prizm Anthony Edwards Silver Prizm RC Pack Fresh!!', description: '2020-21 Panini Prizm Anthony Edwards Silver Prizm Rookie RC #258 Timberwolves.',item_tag:'Sports', user_id: u5.id)
i6 = Item.create(title: '2021 Panini Prizm Lamelo Ball #278 Silver Prizm RC', description: 'PSA 10 candidate',item_tag:'Sports', user_id: u5.id)
i7 = Item.create(title: 'Near mint Charizard card', description: 'Near mint',item_tag:'Pokemon', user_id: u2.id)
i8 = Item.create(title: 'PSA 10 Mewtwo', description: '20k OBO',item_tag:'Pokemon', user_id: u5.id)
i9 = Item.create(title: 'Authentic Louis Vuitton Monogram Petit Noe Shoulder Bag M42226 LV E5395', description: 'light stains and scratches',item_tag:'handbags', user_id: u1.id)
i10 = Item.create(title: 'Coach Hand Bag', description: 'light stains and scratches',item_tag:'handbags', user_id: u1.id)


im1= Image.create(url:'https://i.ebayimg.com/images/g/~uwAAOSwQABimrqF/s-l1600.jpg', item_id: i1.id)
im2= Image.create(url:'https://i.ebayimg.com/images/g/MSUAAOSwea9imrqD/s-l1600.jpg', item_id: i1.id)
im3= Image.create(url:'https://i.ebayimg.com/images/g/UaMAAOSwULximrqE/s-l1600.jpg', item_id: i1.id)
im4= Image.create(url:'https://i.ebayimg.com/images/g/PywAAOSwVclimrqG/s-l1600.jpg', item_id: i1.id)

im5= Image.create(url:'https://i.ebayimg.com/images/g/x5oAAOSw3U9imFDs/s-l1600.jpg', item_id: i2.id)
im6= Image.create(url:'https://i.ebayimg.com/images/g/UjEAAOSwHidimFDt/s-l1600.jpg', item_id: i2.id)
im7= Image.create(url:'https://i.ebayimg.com/images/g/p6gAAOSwXi9imFDt/s-l1600.jpg', item_id: i2.id)
im8= Image.create(url:'https://i.ebayimg.com/images/g/u-4AAOSwDDFimFDt/s-l1600.jpg', item_id: i2.id)

im9= Image.create(url:'https://i.ebayimg.com/images/g/Gh4AAOSw4cdgO9-Y/s-l1600.jpg', item_id: i3.id)
im10= Image.create(url:'https://i.ebayimg.com/images/g/o9IAAOSwAnZgO9-d/s-l1600.jpg', item_id: i3.id)
im11= Image.create(url:'https://i.ebayimg.com/images/g/UHAAAOSwpqFgO9-l/s-l1600.jpg', item_id: i3.id)
im12= Image.create(url:'https://i.ebayimg.com/images/g/hRcAAOSwAblgO9-u/s-l1600.jpg', item_id: i3.id)

im13= Image.create(url:'https://i.ebayimg.com/images/g/By8AAOSw2n9iRItr/s-l1600.jpg', item_id: i4.id)
im14= Image.create(url:'https://i.ebayimg.com/images/g/i4AAAOSwhm9iRItq/s-l1600.jpg', item_id: i4.id)

im15= Image.create(url:'https://i.ebayimg.com/images/g/9~UAAOSwea9ilqol/s-l1600.jpg', item_id: i5.id)
im16= Image.create(url:'https://i.ebayimg.com/images/g/11wAAOSwSxRilqop/s-l1600.jpg', item_id: i5.id)
im17= Image.create(url:'https://i.ebayimg.com/images/g/yAYAAOSwxjhilqos/s-l1600.jpg', item_id: i5.id)
im18= Image.create(url:'https://i.ebayimg.com/images/g/rEgAAOSwElBilqov/s-l1600.jpg', item_id: i5.id)

im19= Image.create(url:'https://i.ebayimg.com/images/g/00wAAOSwrZlimlBW/s-l1600.jpg', item_id: i6.id)
im20= Image.create(url:'https://i.ebayimg.com/images/g/lW0AAOSwQ99imlBY/s-l1600.jpg', item_id: i6.id)
im21= Image.create(url:'https://i.ebayimg.com/images/g/ivwAAOSwCZximlBa/s-l1600.jpg', item_id: i6.id)

im22= Image.create(url:'https://i.ebayimg.com/images/g/zSQAAOSwdThgZkup/s-l1600.jpg', item_id: i7.id)
im23= Image.create(url:'https://i.ebayimg.com/images/g/5eEAAOSwSZ9gZkuq/s-l1600.jpg', item_id: i7.id)
im24= Image.create(url:'https://i.ebayimg.com/images/g/TRsAAOSwYIBgZkur/s-l1600.jpg', item_id: i7.id)

im25= Image.create(url:'https://i.ebayimg.com/images/g/oOUAAOSwJL1imBLx/s-l1600.jpg', item_id: i8.id)
im26= Image.create(url:'https://i.ebayimg.com/images/g/wygAAOSwMilimBLz/s-l1600.jpg', item_id: i8.id)
im27= Image.create(url:'https://i.ebayimg.com/images/g/XW0AAOSw9lRimByu/s-l1600.jpg', item_id: i8.id)
im28= Image.create(url:'https://i.ebayimg.com/images/g/GOgAAOSwSxRimBzc/s-l1600.jpg', item_id: i8.id)

im29= Image.create(url:'https://i.ebayimg.com/images/g/Bk0AAOSwDjZhlL9g/s-l1600.jpg', item_id: i9.id)
im30= Image.create(url:'https://i.ebayimg.com/images/g/V3EAAOSw62xhlL9n/s-l1600.jpg', item_id: i9.id)
im31= Image.create(url:'https://i.ebayimg.com/images/g/EQsAAOSw9URhlL9w/s-l1600.jpg', item_id: i9.id)
im32= Image.create(url:'https://i.ebayimg.com/images/g/xu4AAOSw5HxhlL9y/s-l1600.jpg', item_id: i9.id)

im33= Image.create(url:'https://i.ebayimg.com/images/g/1p0AAOSwwAlij9qt/s-l1600.jpg', item_id: i10.id)
im34= Image.create(url:'https://i.ebayimg.com/images/g/Yh0AAOSwFhZij9qu/s-l1600.jpg', item_id: i10.id)
im35= Image.create(url:'https://i.ebayimg.com/images/g/zIEAAOSwgbBij9qv/s-l1600.jpg', item_id: i10.id)


b1 = Bid.create(bid_price: 1, item_id: i1.id, user_id: u3.id)
b2 = Bid.create(bid_price: 2, item_id: i1.id, user_id: u3.id)
b3 = Bid.create(bid_price: 3, item_id: i1.id, user_id: u6.id)
b4 = Bid.create(bid_price: 4, item_id: i1.id, user_id: u3.id)

b5 = Bid.create(bid_price: 5, item_id: i2.id, user_id: u3.id)