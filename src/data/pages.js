import StartPage from "../pages/StartPage";

//Story 1
import StoryOneOpening from "../pages/storyOne/S1_OpeningOptions/StoryOneOpening";
import Monsters from "../pages/storyOne/monsters";
import Humans from "../pages/storyOne/humans";
import Punishment from "../pages/storyOne/Punishment";
import Mystery from "../pages/storyOne/Mystery";
import Greed from "../pages/storyOne/Greed";
import Reform from "../pages/storyOne/Reform";
import EndingOne from "../pages/endings/StoryOne/EndingOne";

//Story 2
import StoryTwoOpening from "../pages/storyTwo/S2_OpeningOptions/StoryTwoOpening";
import Ritual from "../pages/storyTwo/Ritual";
import Honor from "../pages/storyTwo/Honor";
import Excess from "../pages/storyTwo/Excess";
import Sacrifice from "../pages/storyTwo/Sacrifice";
import Devotion from "../pages/storyTwo/Devotion";
import Cruelty from "../pages/storyTwo/Cruelty";
import EndingTwo from "../pages/endings/StoryTwo/EndingTwo";

//Story 3
import StoryThreeOpening from "../pages/storyThree/S3_OpeningOptions/StoryThreeOpening";
import MonsterNorth from "../pages/storyThree/MonsterNorth";
import HumanNorth from "../pages/storyThree/HumanNorth";
import Unnatural from "../pages/storyThree/Unnatural";
import Strength from "../pages/storyThree/Strength";
import EndingThree from "../pages/endings/StoryThree/EndingThree";
import Differences from "../pages/storyThree/Differences";

export const pages = {

  /**/start: {
    title: "Vikings: Choose Your Own Adventure",
    component: StartPage,
    choices: [
      { label: "Story 1", target: "pageA1" },
      { label: "Story 2", target: "pageB1" },
      { label: "Story 3", target: "pageC1" },
    ],
  },
        /**/pageA1: {
          title: "Story One",
          component: StoryOneOpening,
          choices: [
            { label: "They are monsters", target: "monsters" },
            { label: "They are just people", target: "humans" },
          ],
        },
              /**/monsters: {
                title: "What the Raid Means",
                component: Monsters,
                choices: [
                  { label: "This is punishment", target: "punishment" },
                  { label: "This is beyond understanding", target: "mystery" },
                ],
              },
                    /**/punishment: {
                      title: "Signs of Judgment",
                      component: Punishment,
                      choices: [
                        { label: "Finish the letter", target: "endingOne" }
                      ],
                    },
                    /**/mystery: {
                      title: "Beyond Our Understanding",
                      component: Mystery,
                      choices: [
                        { label: "Finish the letter", target: "endingOne" }                      
                      ],
                    },
              /**/humans: {
                title: "What the Raid Means",
                component: Humans,
                choices: [
                  { label: "Human greed caused this", target: "greed" },
                  { label: "Driven by survival", target: "reform" },
                ],
              },
                    /**/greed: {
                          title: "The Greed of Warfare",
                          component: Greed,
                          choices: [
                            { label: "Finish the Letter", target: "endingOne" },
                          ],
                        },

                        reform: {
                          title: "The Cost of Living",
                          component: Reform,
                          choices: [
                            { label: "Finish the Letter", target: "endingOne" },
                          ],
                        },

        /**/pageB1: {
                  title: "Story Two",
                  component: StoryTwoOpening,
                  choices: [
                    { label: "Focus on the ritual", target: "ritual" },
                    { label: "Focus on the sacrifice", target: "sacrifice" },
                  ],
                },
                      /**/ritual: {
                        title: "The Burial Ritual",
                        component: Ritual,
                        choices: [
                          { label: "It honors the dead", target: "honor" },
                          { label: "It is excessive", target: "excess" },
                        ],
                      },
                            /**/honor: {
                              title: "Honoring the Dead",
                              component: Honor,
                              choices: [
                                { label: "Continue", target: "endingTwo" }
                              ],
                            },
                            /**/excess: {
                              title: "A Display of Wealth",
                              component: Excess,
                              choices: [
                                { label: "Continue", target: "endingTwo" }                      
                              ],
                            },

                      /**/sacrifice: {
                        title: "The Human Cost",
                        component: Sacrifice,
                        choices: [
                          { label: "It is devotion", target: "devotion" },
                          { label: "It is cruelty", target: "cruelty" },
                        ],
                      },
                            /**/devotion: {
                                  title: "Devotion",
                                  component: Devotion,
                                  choices: [
                                    { label: "Continue", target: "endingTwo" },
                                  ],
                                },

                                cruelty: {
                                  title: "Cruelty",
                                  component: Cruelty,
                                  choices: [
                                    { label: "Continue", target: "endingTwo" },
                                  ],
                                },
        /**/pageC1: {
                  title: "Story Three",
                  component: StoryThreeOpening,
                  choices: [
                    { label: "He is something more than human", target: "monsterNorth" },
                    { label: "He is simply human", target: "humanNorth" },
                  ],
                },
                      /**/monsterNorth: {
                        title: "A Land of Extremes",
                        component: MonsterNorth,
                        choices: [
                          { label: "His strength defines him", target: "strength" },
                          { label: "His world is unnatural", target: "unnatural" },
                        ],
                      },
                            /**/strength: {
                              title: "Stength and Survival",
                              component: Strength,
                              choices: [
                                { label: "Continue", target: "endingThree" }
                              ],
                            },
                            /**/unnatural: {
                              title: "An Unnatural World",
                              component: Unnatural,
                              choices: [
                                { label: "Continue", target: "endingThree" }                      
                              ],
                            },
                      /**/humanNorth: {
                        title: "A Life Like Any Other",
                        component: HumanNorth,
                        choices: [
                          { label: "Differences aren't bad", target: "normal" },
                        ],
                      },
                            /**/normal: {
                                  title: "Differences Are Natural",
                                  component: Differences,
                                  choices: [
                                    { label: "Continue", target: "endingThree" },
                                  ],
                                },

  endingOne: {
    title: "The End",
    component: EndingOne,
    isEnding: true,
  },
  endingTwo: {
    title: "The End",
    component: EndingTwo,
    isEnding: true,
  },
  endingThree: {
    title: "The End",
    component: EndingThree,
    isEnding: true,
  },

};
