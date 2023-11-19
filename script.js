$(document).ready(function () {
    $('.option').on('click', function () {
    
        $('.option').off('click');
        var selectedAnswer = $(this).data('answer');
      
        if (selectedAnswer === 'It had the drumsticks') {
            $('#feedback').css('color', 'green').text('Correct!');
        } else {
            $('#feedback').css('color', 'red').text('Incorrect. The correct answer is It had the drumsticks.');
        }
    });
});
