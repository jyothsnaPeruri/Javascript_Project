var click = document.getElementById('click');
var Text = document.getElementById('Surprise');

click.addEventListener('click', function() {
    console.log('This is my text after i clicked: '+Text );
    Text.textContent= 'You have got a surprise gift for christmas!';
});
