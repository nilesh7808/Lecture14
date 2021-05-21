// $('button').click(function() {
//     alert('Someone Clicked the button');
//     let btnText = $(this).text();
//     console.log(btnText);
// });

// $('h1').click(function() {
//     $(this).css({
//         color: 'red',
//         backgroundColor: '#ccc',
//         textAlign: 'center',
//         textTransform: 'uppercase',
//         fontFamily: 'Arial, sans-serif',
//         fontWeight: 700
//     })
// })

// let x = $('h1').removeClass('add');

$('h1').mouseenter(function() {
    $(this).addClass('add');
})

$('h1').mouseout(function() {
    $(this).removeClass('add');
})

$('h1').click(function() {
    $(this).css('color', 'green')
})

// ==================================================================================

// keypress Events

$('input[type="text"]').keypress((e) => {

    if (e.which === 13) {
        alert("You just pressed Enter");

    } else {
        alert("Some Key has been pressed");
    }

})

// ======================================================================================

//  on

// $('div').on('click', function() {
//     $(this).remove();
// })

$('div').on('mouseenter', function() {
    $(this).css('background-color', 'aqua');
})

$('div').on('mouseleave', function() {
    $(this).css('background-color', 'green');
})

// $('#btn').on('click', function() {
//     $('div').fadeOut();
// })

// $('#btn').on('dblclick', function() {
//     $('div').fadeIn();
// })

// $('#btn').on('click', function() {
//     $('div').fadeToggle();
// })

$('#btn').on('click', function() {
    $('div').slideToggle(800, function() {
        console.log("How's the Josh! :)")
    });
})