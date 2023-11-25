var projects = document.querySelectorAll('.project-card');

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("project-container").classList.add("fade-in");
            }
        }

        function toggleDescription(projectId) {
            var projectCard = document.getElementById(projectId);
            var description = projectCard.querySelector('.project-description');
            var toggleButton = projectCard.querySelector('.toggle-button');

            if (projectCard.style.transform === 'rotateY(180deg)') {
                projectCard.style.transform = 'rotateY(0deg)';
                description.style.display = 'none';
                toggleButton.textContent = 'Voltear';
            } else {
                projectCard.style.transform = 'rotateY(180deg)';
                description.style.display = 'block';
                toggleButton.textContent = 'Regresar';
            }
        }

        function toggleAllDescriptions() {
            for (var i = 0; i < projects.length; i++) {
                var projectCard = projects[i];
                var description = projectCard.querySelector('.project-description');
                var toggleButton = projectCard.querySelector('.toggle-button');

                if (projectCard.style.transform === 'rotateY(180deg)') {
                    projectCard.style.transform = 'rotateY(0deg)';
                    description.style.display = 'none';
                    toggleButton.textContent = 'Voltear';
                } else {
                    projectCard.style.transform = 'rotateY(180deg)';
                    description.style.display = 'block';
                    toggleButton.textContent = 'Regresar';
                }
            }
        }
