$(document).ready(function(){
    $('.open-button').click(function() 
    {
            if(!$('.menu-button').hasClass('open-done'))
            {
                $('body').addClass('stop-scrolling')
                $('.menu-button').addClass('open-done');
                $('.menu-block-1').addClass('open-done');
                $('.desarr').addClass('open-done')
                setTimeout(function(){$('.menu-block-2').addClass('open-done')}, 100);
                setTimeout(function(){$('.menu-link-1').addClass('open-done')}, 500);
                setTimeout(function(){$('.menu-link-2').addClass('open-done')}, 600);
                setTimeout(function(){$('.menu-link-3').addClass('open-done')}, 700);
                setTimeout(function(){$('.menu-link-4').addClass('open-done')}, 800);
                
            }
            else
            {
                $('.menu-button').removeClass('open-done');
                $('.menu-link-1').removeClass('open-done');
                $('.desarr').removeClass('open-done')
                setTimeout(function(){$('.menu-link-2').removeClass('open-done')}, 100);
                setTimeout(function(){$('.menu-link-3').removeClass('open-done')}, 200);
                setTimeout(function(){$('.menu-link-4').removeClass('open-done')}, 300);
                setTimeout(function(){$('.menu-block-1').removeClass('open-done')}, 800);
                setTimeout(function(){$('.menu-block-2').removeClass('open-done')}, 600);
                $('body').removeClass('stop-scrolling')
            }
    });
    });



$(document).ready(function() {
    $('.idea-name').click(function(event) {
        if($('.idea-comment').hasClass('one')){
            $('.idea-list').not($(this).next()).removeClass('active');
            $('.idea-list').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })
})




const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }


      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if(!animItem.classList.contains('_anim-no-hide')) {
        animItem.classList.remove('_active');
      }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnScroll();
}









$(function(){
  $(".provans img").hover(function () {
    $('.loft img').toggleClass("hovered");
    $('.classic img').toggleClass("hovered");
    $('.future img').toggleClass("hovered");
    });
  });


  $(function(){
    $(".loft img").hover(function () {
      $('.provans img').toggleClass("hovered");
      $('.classic img').toggleClass("hovered");
      $('.future img').toggleClass("hovered");
      });
    });


    $(function(){
      $(".classic img").hover(function () {
        $('.provans img').toggleClass("hovered");
        $('.loft img').toggleClass("hovered");
        $('.future img').toggleClass("hovered");
        });
      });

      $(function(){
        $(".future img").hover(function () {
          $('.provans img').toggleClass("hovered");
          $('.loft img').toggleClass("hovered");
          $('.classic img').toggleClass("hovered");
          });
        });



    





var btnContainer = document.getElementById("filters");


var btns = btnContainer.getElementsByClassName("filtBtn");


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("use");
    current[0].className = current[0].className.replace(" use", "");
    this.className += " use";
  });
}




        function app(){
          const filterButtons = document.querySelectorAll('.filtBtn ')
          const cards = document.querySelectorAll('.portfolio-item')
        
        
          function filter(category, items){
            items.forEach((item) => {
              const isItemFiltered = !item.classList.contains(category)
              const isShowAll = category.toLowerCase() === 'all'
              if(isItemFiltered && !isShowAll){
                item.classList.add('hide')
              } else {
                item.classList.remove('hide')
              }
            })
          }
        
          filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
              const curentCategory = button.dataset.filter
              filter(curentCategory, cards)
            })
          })
        }
        
        
        app()
        





  
        
        $(function(){
          $(".speed").hover(function () {
            $('.speed').toggleClass("visible");
            });
            $(".quality").hover(function () {
              $('.quality').toggleClass("visible");
              });
              $(".comfort").hover(function () {
                $('.comfort').toggleClass("visible");
                });
          });







        const show = document.querySelector(".show")

        const hiddenColects = document.querySelector(".hide-item")
        
        show.addEventListener('click', function(){
          hiddenColects.classList.toggle('hide-collections')
        
        
          if(hiddenColects.classList.contains('hide-collections')){
            show.textContent = 'Показать больше'
          }else {
            show.textContent = 'Скрыть'
          }
        })





        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
      







        const modalButtons = document.querySelectorAll('[data-modal-button]');

        const modalClosebuttons = document.querySelectorAll('[data-modal-close]');

        const allModals = document.querySelectorAll('[data-modal]');





        
        modalButtons.forEach(function (item) {
            item.addEventListener('click', function () {
            const modalId = this.dataset.modalButton;
            const modal = document.querySelector('#' + modalId);
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'
        
            modal.querySelector('.modal-window').addEventListener('click', function (e) {
              e.stopPropagation();
            });
          })
        })
        
        
        modalClosebuttons.forEach(function (item) {
            item.addEventListener('click', function () {
                const modal = this.closest('[data-modal]');
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto'
            })


          


            allModals.forEach(function (item) {
              item.addEventListener('click', function () {
                  this.classList.add('hidden');
                  document.body.style.overflow = 'auto'
            });
            
          });

        })
        
        



document.addEventListener("DOMContentLoaded", function(){
        
      let phoneInputs = document.querySelectorAll('input[data-tel-input]');

      let getInputNumbersValue = function(input){
        return input.value.replace(/\D/g,"");
      }

      let onPhoneInput = function(e){
        let input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
        formattedInputValue = "";
        selectionStart = input.selectionStart;

        if(!inputNumbersValue){
          return  input.value = "";
        }

        if(input.value.length != selectionStart){
          if(e.data && /\D/g.test(e.data)){
            input.value = inputNumbersValue;
          }
          return
        }


        if(["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1){
          if(inputNumbersValue[0] == "9"){
            inputNumbersValue = "7" + inputNumbersValue;
          }
          let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
          formattedInputValue = firstSymbols + " ";
          if(inputNumbersValue.length > 1){
            formattedInputValue += "(" + inputNumbersValue.substring(1,4)
          }
          if(inputNumbersValue.length >= 5){
            formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
          }
          if(inputNumbersValue.length >= 8){
            formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
          }
          if(inputNumbersValue.length >= 10){
            formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
          }
        }
        else{
          formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
      }


      let onPhoneKeyDown = function(e){
        let input = e.target;
        if(e.keyCode == 8 && getInputNumbersValue(input).length ==1){
          input.value = "";
        }
      }

      let onPhonePaste = function(e){
        let pasted = e.clipboardData || window.clipboardData,
        input = e.target,
        inputNumbersValue = getInputNumbersValue(input);

        if(pasted){
          let pastedText = pasted.getData("Text");
          if(/\D/g.test(pastedText)){
            input.value = inputNumbersValue;
          }
        }
      }

      for(i=0; i<phoneInputs.length; i++){
        let input =  phoneInputs[i];
        input.addEventListener("input", onPhoneInput);
        input.addEventListener("keydown", onPhoneKeyDown);
        input.addEventListener("paste", onPhonePaste);
        }


      })

