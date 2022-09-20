const skills = document.querySelectorAll('.skills__list-item');

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target && !e.target.classList.contains('skills__list-item') && !e.target.classList.contains('window_shown') &&
    !e.target.classList.contains('window-bottom') && !e.target.classList.contains('window-bottom__text')) {
        try {
            document.querySelector('.window_shown').classList.remove('window_shown');
            document.querySelector('.skills__list-item_highlighted').classList.remove('skills__list-item_highlighted');
        } catch (err) {}
    }
});

function showWindow(wName, skill) {
    try {
        document.querySelector('.window_shown').classList.remove('window_shown');
        document.querySelector('.skills__list-item_highlighted').classList.remove('skills__list-item_highlighted');
    } catch (err) {}
    document.querySelector(wName).classList.add('window_shown');
    skill.classList.add('skills__list-item_highlighted');
}

skills.forEach(function(val, i) {
    switch(i) {
        case 0:
            skills[i].addEventListener('click', () => {
                showWindow('.window-safety', skills[i]);
            });
            break;
        case 1:
            skills[i].addEventListener('click', () => {
                showWindow('.window-storage', skills[i]);
            });
            break;
        case 2:
            skills[i].addEventListener('click', () => {
                showWindow('.window-admin', skills[i]);
            });
            break;
        case 3:
            skills[i].addEventListener('click', () => {
                showWindow('.window-reverse', skills[i]);
            });
            break;            
        case 4:
            skills[i].addEventListener('click', () => {
                showWindow('.window-crypto', skills[i]);
            });
            break;
        case 5:
            skills[i].addEventListener('click', () => {
                showWindow('.window-pentest', skills[i]);
            });
            break;
    }
});

document.querySelector('.ctf').addEventListener('click', () => {
    document.querySelector('.password-input').focus();
    let allHidden = true,
        errorWindows = document.querySelectorAll('.error'),
        closeBtns = document.querySelectorAll('.error-top__close');

    try {
        errorWindows[0].classList.add('error_shown');
        document.querySelector('.password-input').readOnly = true;   
        document.querySelector('.password-form').onsubmit = () => {return false;};
    } catch (err) {
        document.querySelector('.password-input').readOnly = false;  
        document.querySelector('.password-form').onsubmit = () => {this.handleSubmit;};
        throw err + ' (Хорошая работа!)';
    }

    try {
        closeBtns.forEach(function(val, i) {
            switch(i) {
                case 0:
                    closeBtns[i].addEventListener('click', () => {
                        errorWindows[i+1].classList.add('error_shown'); 
                    });
                    break;
                case 1:
                    closeBtns[i].addEventListener('click', () => {
                        errorWindows[i+1].classList.add('error_shown'); 
                    });
                    break;
                case 2:
                    closeBtns[i].addEventListener('click', () => {
                        errorWindows[i+1].classList.add('error_shown'); 
                    });
                    break;
                case 3:
                    closeBtns[i].addEventListener('click', () => {
                        errorWindows[i+1].classList.add('error_shown');
                    });
                    break;            
            }
        });
    } catch (err) {}

    errorWindows.forEach(function(val, i) {
        if (window.getComputedStyle(errorWindows[i], null).getPropertyValue("display") == 'block') {
            allHidden = false;
        }
    });

    if (allHidden) {
        document.querySelector('.password-input').readOnly = false;  
        document.querySelector('.password-form').onsubmit = () => {this.handleSubmit;};
        console.warn('Хорошая работа!');
    }
});