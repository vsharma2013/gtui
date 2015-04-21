

var categories = [
	{
		id : 1,
		type : "Electronics"
	},
	{
		id : 2,
		type : "Clothing"
	},
	{
		id : 3
		type : "Applicances"
	},
	{
		id : 4
		type : "Automobiles"
	}
];

var electronicsProducts = [
	{
		id : 1,
		categoryId : 1,
		type : "Mobile",
		brands : ["Apple", "Samsung", "Micromax", "Xiome", "Nokia"]
	},
	{
		id : 2,
		categoryId : 1,
		type : "Tablets",
		brands : ["Apple", "Samsung", "HP", "Dell", "Asus"]
	},
	{
		id : 3,
		categoryId : 1,
		type : "Laptops",
		brands : ["Apple", "Samsung", "Acer", "Compaq", "Lenovo"]
	}
];

var clothingProducts = [
	{
		id : 1,
		categoryId : 2,
		type : "Shirts",
		brands : ["VanHusen", "ColorPlus", "Arrow", "PeterEngland", "RalphPolo"]
	},
	{
		id : 2,
		categoryId : 2,
		type : "TShirts",
		brands : ["Nike", "Addidas", "Crocodile", "Kings", "SFK"]
	},
	{
		id : 3,
		categoryId : 2,
		type : "Jeans",
		brands : ["Levis", "Wrangler", "Stryker", "Killer", "Pepe"]
	}
];

var applicancesProducts = [
	{
		id : 1,
		categoryId : 3,
		type : "Refrigrator",
		brands : ["Godrej", "Voltas", "Alwyn", "GE", "Videocon"]
	},
	{
		id : 2,
		categoryId : 3,
		type : "TV",
		brands : ["LG", "Samsung", "Sony", "Panasonic", "Toshiba"]
	},
	{
		id : 3,
		categoryId : 3,
		type : "AC",
		brands : ["Carrier", "Lyod", "BlueStar", "Hitachi", "Kenstar"]
	}
];

var automobileProducts = [
	{
		id : 1,
		categoryId : 4,
		type : "Bike",
		brands : ["Bajaj", "Hero", "Kawasaky", "Yamaha", "Suzuki"]
	},
	{
		id : 2,
		categoryId : 4,
		type : "Car",
		brands : ["Maruti", "Hyundai", "Tata", "Fiat", "Skoda"]
	},
	{
		id : 3,
		categoryId : 4,
		type : "SUV",
		brands : ["Honda", "Toyota", "BMW", "Audi", "Mercedes"]
	}
];

var Mobile_Apple = ['iPhone1', 'iPhone2','iPhone3','iPhone4','iPhone5','iPhone6','iPhone7','iPhone8','iPhone9','iPhone10'];
var Mobile_Samsung = ['Galaxy1', 'Galaxy2', 'Galaxy3', 'Galaxy4', 'Galaxy5', 'Galaxy6', 'Galaxy7', 'Galaxy8', 'Galaxy9', 'Galaxy10'];
var Mobile_Micromax = ['MicroG1', 'MicroG2', 'MicroG3', 'MicroG4', 'MicroG5', 'MicroG6', 'MicroG7', 'MicroG8', 'MicroG9', 'MicroG10'];
var Xiome_Mobiles = ['XiomX1', 'XiomX2', 'XiomX3', 'XiomX4', 'XiomX5', 'XiomX6', 'XiomX7', 'XiomX8', 'XiomX9', 'XiomX10'];
var Nokia_Mobiles = ['Lumia1', 'Lumia2', 'Lumia3', 'Lumia4', 'Lumia5', 'Lumia6', 'Lumia7', 'Lumia8', 'Lumia9', 'Lumia10'];
var Tablet_Apple = ['iPad1', 'iPad2', 'iPad3', 'iPad4', 'iPad5', 'iPad6', 'iPad7', 'iPad8', 'iPad9', 'iPad10'];
var Tablet_Samsung = ['Note1', 'Note2', 'Note3', 'Note4', 'Note5', 'Note6', 'Note7', 'Note8', 'Note9', 'Note10'];
var Tablet_HP = ['HPTab1', 'HPTab2', 'HPTab3', 'HPTab4', 'HPTab5', 'HPTab6', 'HPTab7', 'HPTab8', 'HPTab9', 'HPTab10'];
var Tablet_Dell = ['Delta1', 'Delta2', 'Delta3', 'Delta4', 'Delta5', 'Delta6', 'Delta7', 'Delta8', 'Delta9', 'Delta10']
var Tablet_Asus = ['AsusK1', 'AsusK2', 'AsusK3', 'AsusK4', 'AsusK5', 'AsusK6', 'AsusK7', 'AsusK8', 'AsusK9', 'AsusK10'];
var Laptop_Apple = ['Mac1', 'Mac2', 'Mac3', 'Mac4', 'Mac5', 'Mac6', 'Mac7', 'Mac8', 'Mac9', 'Mac10'];
var Laptop_Samsung = ['SGLap1', 'SGLap1', 'SGLap1', 'SGLap4', 'SGLap5', 'SGLap6', 'SGLap7', 'SGLap8', 'SGLap9', 'SGLap10' ];
var Laptop_Acer = ['Acer1', 'Acer2', 'Acer3', 'Acer4', 'Acer5', 'Acer6', 'Acer7', 'Acer8', 'Acer9', 'Acer10'];
var Laptop_Lenovo = ['Leno1', 'Leno2', 'Leno3', 'Leno4', 'Leno5', 'Leno6', 'Leno7', 'Leno8', 'Leno9', 'Leno10'];
var Laptop_Compaq = ['CompQ1', 'CompQ2', 'CompQ3', 'CompQ4', 'CompQ5', 'CompQ6', 'CompQ7', 'CompQ8', 'CompQ9', 'CompQ10'];

var Shirts_VanHusen = ['VanH1', 'VanH2', 'VanH3', 'VanH4', 'VanH5', 'VanH6', 'VanH7', 'VanH8', 'VanH9', 'VanH10' ];
var Shirts_ColorPlus = ['ColorP1', 'ColorP2', 'ColorP3', 'ColorP4', 'ColorP5', 'ColorP6', 'ColorP7', 'ColorP8', 'ColorP9', 'ColorP10'];
var Shirts_Arrow = ['Arrow1', 'Arrow2', 'Arrow3', 'Arrow4', 'Arrow5', 'Arrow6', 'Arrow7', 'Arrow8', 'Arrow9', 'Arrow10'];
var Shirts_PeterEngland = ['PeterE1', 'PeterE2', 'PeterE3', 'PeterE4', 'PeterE5', 'PeterE6', 'PeterE7', 'PeterE8', 'PeterE9', 'PeterE10'];
var Shirts_RalphPolo = ['RalphP1', 'RalphP2', 'RalphP3', 'RalphP4', 'RalphP5', 'RalphP6', 'RalphP7', 'RalphP8', 'RalphP9', 'RalphP10'];
var TShirts_Nike = ['Nike1', 'Nike2', 'Nike3', 'Nike4', 'Nike5', 'Nike6', 'Nike7', 'Nike8', 'Nike9', 'Nike10'];
var TShirts_Addidas = ['Addidas1', 'Addidas2', 'Addidas3', 'Addidas4', 'Addidas5', 'Addidas6', 'Addidas7', 'Addidas8', 'Addidas9', 'Addidas10'];
var TShirts_Crocodile = ['Croc1', 'Croc2', 'Croc3', 'Croc4', 'Croc5', 'Croc6', 'Croc7', 'Croc8', 'Croc9', 'Croc10'];
var TShirts_Kings = ['Kings1', 'Kings2', 'Kings3', 'Kings4', 'Kings5', 'Kings6', 'Kings7', 'Kings8', 'Kings9', 'Kings10'];
var TShirts_SFK = ['SFK1', 'SFK2', 'SFK3', 'SFK4', 'SFK5', 'SFK6', 'SFK7', 'SFK8', 'SFK9', 'SFK10'];
var Jeans_Levis = ['Levis1', 'Levis2', 'Levis3', 'Levis4', 'Levis5', 'Levis6', 'Levis7', 'Levis8', 'Levis9', 'Levis10'];
var Jeans_Wrangler = ['Wrangl1', 'Wrangl2', 'Wrangl3', 'Wrangl4', 'Wrangl5', 'Wrangl6', 'Wrangl7', 'Wrangl8', 'Wrangl9', 'Wrangl10'];
var Jeans_Stryker = ['Stryk1', 'Stryk2', 'Stryk3', 'Stryk4', 'Stryk5', 'Stryk6', 'Stryk7', 'Stryk8', 'Stryk9', 'Stryk10'];
var Jeans_Killer = ['Killer1', 'Killer2', 'Killer3', 'Killer4', 'Killer5', 'Killer6', 'Killer7', 'Killer8', 'Killer9', 'Killer10'];
var Jeans_Pepe = ['Pepe1', 'Pepe2', 'Pepe3', 'Pepe4', 'Pepe5', 'Pepe6', 'Pepe7', 'Pepe8', 'Pepe9', 'Pepe10'];

var Refrige_Godrej = ['Godrej1', 'Godrej2', 'Godrej3', 'Godrej4', 'Godrej5', 'Godrej6', 'Godrej7', 'Godrej8', 'Godrej9', 'Godrej10'];
var Refrige_Voltas = ['Voltas1', 'Voltas2','Voltas3','Voltas4','Voltas5','Voltas6','Voltas7','Voltas8','Voltas9','Voltas10'];
var Refrige_Alwyn = ['Alwyn1', 'Alwyn2','Alwyn3','Alwyn4','Alwyn5','Alwyn6','Alwyn7','Alwyn8','Alwyn9','Alwyn10'];
var Refrige_GE =['GE1', 'GE1','GE2','GE3','GE4','GE5','GE6','GE7','GE8','GE9','GE10'];
var Refrige_8idecon = ['Videocon1','Videocon2','Videocon3','Videocon4','Videocon5','Videocon6','Videocon7','Videocon8','Videocon9','Videocon10'];
var TV_LG = ['LGTV1', 'LGTV2', 'LGTV3', 'LGTV4', 'LGTV5', 'LGTV6', 'LGTV7', 'LGTV8', 'LGTV9', 'LGTV10'];
var TV_Samsung = ['SGTV1', 'SGTV2', 'SGTV3', 'SGTV4', 'SGTV5', 'SGTV6', 'SGTV7', 'SGTV8', 'SGTV9', 'SGTV10'];
var TV_Sony = ['Sony1', 'Sony2', 'Sony3', 'Sony4', 'Sony5', 'Sony6', 'Sony7', 'Sony8', 'Sony9', 'Sony10'];
var TV_Panasonic = ['Panasn1', 'Panasn2','Panasn3','Panasn4','Panasn5','Panasn6','Panasn7','Panasn8','Panasn9','Panasn10'];
var TV_Toshiba = ['Toshiba1', 'Toshiba2','Toshiba3','Toshiba4','Toshiba5','Toshiba6','Toshiba7','Toshiba8','Toshiba9','Toshiba10'];
var AC_Carrier = ['Carrier1', 'Carrier2', 'Carrier3', 'Carrier4', 'Carrier5', 'Carrier6', 'Carrier7', 'Carrier8', 'Carrier9', 'Carrier10'];
var AC_Lyod = ['Lyod1', 'Lyod2', 'Lyod3', 'Lyod4', 'Lyod5', 'Lyod6', 'Lyod7', 'Lyod8', 'Lyod9', 'Lyod10'];
var AC_BlueStar = ['BlueStar1', 'BlueStar2', 'BlueStar3', 'BlueStar4', 'BlueStar5', 'BlueStar6', 'BlueStar7', 'BlueStar8', 'BlueStar9', 'BlueStar10'];
var AC_Hitachi = ['Hitachi1', 'Hitachi2', 'Hitachi3', 'Hitachi4', 'Hitachi5', 'Hitachi6', 'Hitachi7', 'Hitachi8', 'Hitachi9', 'Hitachi10'];
var AC_Kenstar = ['Kenstar1', 'Kenstar2', 'Kenstar3', 'Kenstar4', 'Kenstar5', 'Kenstar6', 'Kenstar7', 'Kenstar8', 'Kenstar9', 'Kenstar10'];


var Bike_Bajaj = ['Bajaj1', 'Bajaj2', 'Bajaj3', 'Bajaj4', 'Bajaj5', 'Bajaj6', 'Bajaj7', 'Bajaj8', 'Bajaj9', 'Bajaj10' ];
var Bike_Hero = ['Hero1', 'Hero2','Hero3','Hero4','Hero5','Hero6','Hero7','Hero8','Hero9','Hero10'];
var Bike_Kawasaky = ['Kawasaky', 'Kawasaky', 'Kawasaky', 'Kawasaky', 'Kawasaky', 'Kawasaky', 'Kawasaky', 'Kawasaky', 'Kawasaky', 'Kawasaky' ];
var Bike_Yamaha = ['Yamaha1', 'Yamaha2','Yamaha3','Yamaha4','Yamaha5','Yamaha6','Yamaha7','Yamaha8','Yamaha9','Yamaha10'];
var Bike_Suzuki = ['Suzuki1', 'Suzuki2', 'Suzuki3', 'Suzuki4', 'Suzuki5', 'Suzuki6', 'Suzuki7', 'Suzuki8', 'Suzuki9', 'Suzuki10'];
var Car_Maruti = ['Maruti1', 'Maruti2', 'Maruti3', 'Maruti4', 'Maruti5', 'Maruti6', 'Maruti7', 'Maruti8', 'Maruti9', 'Maruti10' ];
var Car_Hyundai = ['Hyundai1', 'Hyundai2', 'Hyundai3', 'Hyundai4', 'Hyundai5', 'Hyundai6', 'Hyundai7', 'Hyundai8', 'Hyundai9', 'Hyundai10' ];
var Car_Tata = ['Tata1', 'Tata2', 'Tata3', 'Tata4', 'Tata5', 'Tata6', 'Tata7', 'Tata8', 'Tata9', 'Tata10' ];
var Car_Fiat = ['Fiat1', 'Fiat2', 'Fiat3', 'Fiat4', 'Fiat5', 'Fiat6', 'Fiat7', 'Fiat8', 'Fiat9', 'Fiat10' ];
var Car_Skoda = ['Skoda1', 'Skoda2', 'Skoda3', 'Skoda4', 'Skoda5', 'Skoda6', 'Skoda7', 'Skoda8', 'Skoda9', 'Skoda10' ];

var SUV_Honda = ['Honda1', 'Honda2', 'Honda3', 'Honda4', 'Honda5', 'Honda6', 'Honda7', 'Honda8', 'Honda9', 'Honda10'];
var SUV_Toyota = ['Toyota1', 'Toyota2', 'Toyota3', 'Toyota4', 'Toyota5', 'Toyota6', 'Toyota7', 'Toyota8', 'Toyota9', 'Toyota10'];
var SUV_BMW = ['BMW1', 'BMW2', 'BMW3', 'BMW4', 'BMW5', 'BMW6', 'BMW7', 'BMW8', 'BMW9', 'BMW10'];
var SUV_Audi = ['Audi1', 'Audi2', 'Audi3', 'Audi4', 'Audi5', 'Audi6', 'Audi7', 'Audi8', 'Audi9', 'Audi10'];
var SUV_Merc = ['Merc1', 'Merc2', 'Merc3', 'Merc4', 'Merc5', 'Merc6', 'Merc7', 'Merc8', 'Merc9', 'Merc10'];







