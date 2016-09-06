var json = {
    "Hatch": [
        {
            "name": "Fiesta",
            "price": "1223",
            "maker": "Ford"
        },
        {
            "name": "Polo",
            "price": "3453",
            "maker": "VW"
        }
    ],
    "Sedan": [
        {
            "name": "Mustang",
            "price": "1223",
            "maker": "Ford"
        },
        {
            "name": "Jetta",
            "price": "3453",
            "maker": "VW"
        }
    ],
    "SUV": [
        {
            "name": "Santa Fe",
            "price": "1223",
            "maker": "Hyundai"
        },
        {
            "name": "Evoque",
            "price": "3453",
            "maker": "Land Rover"
        }
    ]
}

$(document).ready(function(){
	for( index in json.Hatch )
    {
      $('#hatch ul').append('<li><a href="#" data-maker="'+json.Hatch[index].maker+'" data-price="'+json.Hatch[index].price+'">'+json.Hatch[index].name+'</a></li>');
   
    }
	for( index in json.Sedan )
    {
      $('#sedan ul').append('<li><a href="#" data-maker="'+json.Sedan[index].maker+'" data-price="'+json.Sedan[index].price+'">'+json.Sedan[index].name+'</a></li>');

    }
	for( index in json.SUV )
    {
      $('#suv ul').append('<li><a href="#" data-maker="'+json.SUV[index].maker+'" data-price="'+json.SUV[index].price+'">'+json.SUV[index].name+'</a></li>');

    }
  
  $('a').on('click', function(){
    $('#show').html(   'Price : ' + $(this).attr('data-price') + '| Maker : ' +  $(this).attr('data-maker')   );
  });
});