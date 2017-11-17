//This function determines what the res should be based off the query param
function determineResponse (req, res, next){
  let data = {};
  if(req.query.description == ''){
    data = {
        question: 'Tell me a little about yourself?',
        answer: 'I grew up in Brooklyn in the very Jewish section of Boro Park. I went to private religious schools all my life. In 11th grade, I realized that I really wanted a proper secular education. I decided to leave the Jewish school to pursue a college degree. From there I launched two start-ups and successfully graduated GA\'s full Stack Web Development class.'
    }
  } else if (req.query.tech == ''){
    data = {
      question: 'What excites you about technology?',
      answer: 'I love how technology is shaping our future. I especially would like to be part of this transition.'
    }
  } else if (req.query.techstack == ''){
    data = {
      question: 'What is your preferred technology stack?',
      answer: 'I prefer a stack that consists of HTML, CSS, and React for the front end, node.js with Express for the backend, and PSQL for the DB.'
    }
  } else if (req.query.hobbies == ''){
    data = {
      question: 'What are your favorite hobbies?',
      answer: 'I do not have many hobbies besides for learning new dev skills. However, I do like volunteering at my local precinct when I have a chance.'
    }
  } else if (req.query !== true){
    data = {
      questin1: {
        question: 'Tell me a little about yourself?',
        answer: 'I grew up in Brooklyn in the very Jewish section of Boro Park. I went to private religious schools all my life. In 11th grade, I realized that I really wanted a proper secular education. I decided to leave the Jewish school to pursue a college degree. From there I launched two start-ups and successfully graduated GA\'s full Stack Web Development class.'
      },
      question2: {
        question: 'What excites you about technology?',
        answer: 'I love how technology is shaping our future. I especially would like to be part of this transition.'
      },
      question3: {
        question: 'What is your preferred technology stack?',
        answer: 'I prefer a stack that consists of HTML, CSS, and React for the front end, node.js with Express for the backend, and PSQL for the DB.'
      },
      question4: {
        question: 'What are your favorite hobbies?',
        answer: 'I do not have many hobbies besides for learning new dev skills. However, I do like volunteering at my local precinct when I have a chance.'
      }
    };
  }
  res.locals.data = data;
  next();
}

module.exports = { determineResponse };