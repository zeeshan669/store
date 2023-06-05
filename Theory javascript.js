// JavaScript program to find minimum
        // number of lectures to attend
        // to maintain 75% attendance

        // Define a global variable to store the label
        let O = "Minimum number of lectures to attend";
        let X = 0;

        // Method to compute minimum lecture
        function minimumLectures(m, n) {
            let ans = 0;
            let x = 1.33333 * n;

            // Formula to compute
            if (n < Math.ceil(0.75 * m)) {
                ans = Math.ceil(((0.75 * m) - n) / 0.25);
            } else {
                ans = 0;
            }

            return {
                lecturesToAttend: ans,
                xMinusM: x - m
            };
        }

        function calculateMinimumLectures() {
            // Prompt the user to input M (total no of classes) and N (classes attended)
            let M = parseInt(document.getElementById("classes-held").value);
            let N = parseInt(document.getElementById("classes-attended").value);
            if (M < 0 || N < 0) {
             alert("Values cannot be less than 0");
         return; // Stop code execution
     }
            if (M < N ) {alert("Classes attended can't be more than Classes held")
                return;
        } ;

            // Call the minimumLectures function with user-input values
            let result = minimumLectures(M, N);
            let resultLabel = document.getElementById("result-label");
            resultLabel.innerHTML = O + ": " + result.lecturesToAttend;
            
            if (result.lecturesToAttend > 0) {
                            document.getElementById("result-label").innerHTML = O + ": " + result.lecturesToAttend;
            } else {
                            document.getElementById("result-label").innerHTML = "";


;
            }


            // // Display 75% of total classes held
            // let seventyFivePercent = Math.ceil(0.75 * M);
            // document.getElementById("seventy-five-percent").innerHTML = seventyFivePercent;


            // Calculate and display the number of classes that can be left
            if (result.lecturesToAttend === 0) {
                let classesCanBeLeft = Math.floor(result.xMinusM);
                if (classesCanBeLeft === -1) {classesCanBeLeft = 0;
                } else {classesCanBeLeft = (classesCanBeLeft);}


                document.getElementById("classes-can-be-left").innerHTML = "No of classes which can be left: " + classesCanBeLeft;
            } else {
                document.getElementById("classes-can-be-left").innerHTML = "";
            }
        }
