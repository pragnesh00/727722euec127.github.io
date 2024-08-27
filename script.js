async function previewResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const education = document.getElementById('education').value.split('\n').map(line => <li>${line}</li>).join('');
    const skills = document.getElementById('skills').value.split('\n').map(line => <li>${line}</li>).join('');
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;

    const photoInput = document.getElementById('photo');
    const photo = photoInput.files[0];
    
    let photoUrl = '';
    if (photo) {
        photoUrl = URL.createObjectURL(photo);
    }

    const resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = `
        <div class="personal-info">
            <img src="${photoUrl}" class="photo" alt="Photo">
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Date of Birth: ${dob}</p>
        </div>
        <div class="section">
            <h3>Educational Qualifications:</h3>
            <ul>${education}</ul>
        </div>
        <div class="section">
            <h3>Skills:</h3>
            <ul>${skills}</ul>
        </div>
        <div class="section">
            <h3>Profile Links:</h3>
            <p>GitHub: <a href="${github}" target="_blank">${github}</a></p>
            <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        </div>
    `;
    resumePreview.style.display = 'block';
}



function loadImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                resolve(img);
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}