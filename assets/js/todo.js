
// Mark/unmark todo as done.
$('ul').on('click', 'li', function(){
    $(this).toggleClass('done');
});

        //Show/hide imput. 
$('#add').on('click', function(){
    $('input[type="text"]').toggleClass('show');
})

        // Remove todo from list.
$('ul').on('click','span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add new Todo.
$('input[type="text"]').keypress(function(event){
    if (event.which === 13) {
        var newTodo = $(this).val();
        $('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> '+ newTodo + '</li>');
        $('input[type="text"]').val('');
    }
});
