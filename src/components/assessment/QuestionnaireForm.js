import React from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";

// change color theme for forms
let defaultThemeColors = Survey.StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#176BA0";
Survey.StylesManager.applyTheme("modern");

// set message for completion page
Survey.completeText = "Thank you for completing the assessment!";

const json = {
  pages: [
    {
      title: "Multiple Intelligence Assessment",
      questions: [
        {
          type: "rating",
          name: "1",
          title: "Books are very important to me.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        },
        {
          type: "rating",
          name: "2",
          title:
            "I can hear words in my head before I read, speak, or write them down.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        },
        {
          type: "rating",
          name: "3",
          title:
            "I get more out of listening to the radio or a spoken-word recording than I do from television or films.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        },
        {
          type: "rating",
          name: "4",
          title: "I enjoy word games like Scrabble, Anagrams, or Password.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        },
        {
          type: "rating",
          name: "5",
          title:
            "I enjoy entertaining myself or others with tongue twisters, nonsense rhymes, or puns.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        },
        {
          type: "rating",
          name: "6",
          title:
            "Other people sometimes have to stop and ask me to explain the meaning of the words I use in my writing and speaking.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        },
        {
          type: "rating",
          name: "7",
          title:
            "English, social studies, and history were easier for me in school than math and science.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        },
        {
          type: "rating",
          name: "8",
          title:
            "Learning to speak or read another language (e.g., French, Spanish, German) has been relatively easy for me.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        },
        {
          type: "rating",
          name: "9",
          title:
            "My conversation includes frequent references to things that I’ve read or heard.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        },
        {
          type: "rating",
          name: "10",
          title:
            "I’ve written something recently that I was particularly proud of or that earned me recognition from others.",
          isRequired: true,
          mininumRateDescription: "Not Applicable",
          maximumRateDescription: "Very Applicable"
        }
      ]
    },
    {
      questions: [
        {
          type: "text",
          name: "email",
          isRequired: true,
          title:
            "Thank you for taking the assessment. Please enter your email address below to complete the assessment."
        }
      ]
    }
  ],
  completedHtml: "<p><h4>Thank you for completing the assessment!</h4></p>"
};

const survey = new Survey.Model(json);

const QuestionnaireForm = () => {
  return <Survey.Survey model={survey} />;
};

export default QuestionnaireForm;
