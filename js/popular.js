    window.addEventListener('load', () => {
        const popularSlide = document.querySelector('.popular__slide');
        const prevBtn = document.querySelector('.prev__btn');
        const nextBtn = document.querySelector('.next__btn');
        const poularSlideItems = document.querySelectorAll('.popular__slide__item');
        const popularSlideList = document.querySelector('.popular__slide__list');
        const slideWidth = poularSlideItems[0].offsetWidth;
        const slideLength = poularSlideItems.length;
        console.log(slideLength);
        let postionX = 0;
        let index = 0;
        nextBtn.addEventListener('click', () => {
            handleChangeSlide(1);
        });
        prevBtn.addEventListener('click',() => {
            handleChangeSlide(-1);
        });
        function handleChangeSlide(direction) {
            if(direction === 1) {
                
                if(index >= slideLength - 1) {
                    index = slideLength - 1;
                    return;
                }
                postionX = postionX - slideWidth;
                popularSlideList.style = `;transform: translateX(${postionX}px)`;
                index++;
            }else if(direction === -1) {
                if(index <= 0) {
                    index = 0;
                    return;
                };
                postionX = postionX + slideWidth;
                popularSlideList.style = `;transform: translateX(${postionX}px)`;
                index--;
            }
        }

    });
