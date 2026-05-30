export const initContactForm = () => {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const inputs = form?.querySelectorAll('input, select, textarea');

    if (!form || !submitBtn || !inputs) return;

    submitBtn.disabled = false;

    const scrollToFirstInvalid = () => {
        const firstInvalidParent = form.querySelector('.is-invalid-parent') as HTMLElement;
        if (firstInvalidParent) {
            firstInvalidParent.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const input = firstInvalidParent.querySelector('input, select, textarea') as HTMLElement;
            if (input) input.focus();
        }
    };

    inputs.forEach(input => {
        const inputElement = input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        const parent = inputElement.closest('.form-floating');
        
        inputElement.addEventListener('input', () => {
            // Remove invalid state when user starts typing
            inputElement.classList.remove('is-invalid');
            parent?.classList.remove('is-invalid-parent');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let firstInvalidFound = false;

        if (!form.checkValidity()) {
            e.stopPropagation();
            
            inputs.forEach(input => {
                const inputElement = input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                const parent = inputElement.closest('.form-floating');

                if (!inputElement.checkValidity()) {
                    inputElement.classList.add('is-invalid');
                    parent?.classList.add('is-invalid-parent');
                    console.log(`Validation failed for: ${inputElement.id}`);
                } else {
                    inputElement.classList.remove('is-invalid');
                    parent?.classList.remove('is-invalid-parent');
                }
            });

            scrollToFirstInvalid();
            return;
        }

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const shootType = (document.getElementById('shootType') as HTMLSelectElement).value;
        const location = (document.getElementById('location') as HTMLInputElement).value;
        const date = (document.getElementById('date') as HTMLInputElement).value;
        const language = (document.getElementById('language') as HTMLSelectElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;

        const data = {
            name,
            email,
            shootType,
            location,
            date,
            language,
            message
        };

        submitBtn.disabled = true;
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';

        fetch('https://bkdsqxuyqiovhptdvnqq.supabase.co/functions/v1/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you! Your inquiry has been sent successfully.');
                form.reset();
            } else {
                alert('Oops! There was a problem sending your inquiry. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Oops! There was a problem sending your inquiry. Please try again later.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        });
    });
};

initContactForm();
