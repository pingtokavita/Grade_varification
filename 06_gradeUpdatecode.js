//This method generate the grades as per marks. In input format is number
var grades = function(marks) {
    // Check if marks is undefined, null, or not a number after conversion
    if (marks == undefined || marks == null || isNaN(+marks)) {
        if (typeof marks === 'string' && isNaN(+marks)) {
            console.log(`g) Entered value "${marks}" is valid but it is not a number - please provide a valid number`);
        } else {
            console.log(`f) Invalid Marks: ${marks} - please provide valid marks`);
        }
    } else if (marks < 0 || marks > 100) {
        console.log(`f) Invalid Marks: ${marks} - please provide valid marks`);
    } else {
        marks = +marks; // Convert to number if it's a valid numerical string

        if (marks >= 90) {
            console.log(`a) Fantastic marks: ${marks}, your grade is A+`);
        } else if (marks >= 75) {
            console.log(`b) Excellent marks: ${marks}, your grade is A`);
        } else if (marks >= 50) {
            console.log(`c) Good Marks: ${marks}, your grade is B`);
        } else if (marks >= 35) {
            console.log(`d) Marks is ${marks}, your grade is C, Need Improvement`);
        } else if (marks >= 0) {
            console.log(`e) Failed Marks: ${marks}`);
        }
    }
}

// Example usage
grades("95");     // Should log: a) Fantastic marks: 95, your grade is A+
grades("80");     // Should log: b) Excellent marks: 80, your grade is A
grades("60");     // Should log: c) Good Marks: 60, your grade is B
grades("40");     // Should log: d) Marks is 40, your grade is C, Need Improvement
grades("20");     // Should log: e) Failed Marks: 20
grades("Eighty");    // Should log: f) Invalid Marks: abc - please provide valid marks
grades("");       // Should log: f) Invalid Marks:  - please provide valid marks
grades(null);     // Should log: f) Invalid Marks: null - please provide valid marks
grades(undefined); // Should log: f) Invalid Marks: undefined - please provide valid marks
grades(105);      // Should log: f) Invalid Marks: 105 - please provide valid marks
grades(-5);       // Should log: f) Invalid Marks: -5 - please provide valid marks
