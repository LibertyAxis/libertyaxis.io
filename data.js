var questions = [
    {
        "question": "Individuals should have the freedom to use and experiment with drugs if they choose to do so?",
        "points": {
            "yes": {
                "x": -1,
                "y": 0
            },
            "no": {
                "x": 1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government regulate or restrict drug use in any way?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Individuals have the right to choose whether to have an abortion?",
        "points": {
            "yes": {
                "x": -1,
                "y": 0
            },
            "no": {
                "x": 1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government create laws governing access to abortion, whether to restrict or protect it?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Same-sex couples should have the right to adopt children?",
        "points": {
            "yes": {
                "x": -1,
                "y": 0
            },
            "no": {
                "x": 1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government set specific laws on who can or cannot adopt children?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Fairness and justice should be upheld in personal disputes and accusations, ensuring equal treatment for all parties even know criminals, also no death penalty?",
        "points": {
            "yes": {
                "x": -1,
                "y": 0
            },
            "no": {
                "x": 1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government be responsible for maintaining and enforcing the justice system, based on your opinion previous view on fairness and justice?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Climate change is a real threat, and people should take personal action to help stop it?",
        "points": {
            "yes": {
                "x": -1,
                "y": 0
            },
            "no": {
                "x": 1,
                "y": 0
            }
        },
        "subquestion": {
            "question": "Should the government enforce laws or policies to mitigate climate change and promote renewable energy?",
            "points": {
                "yes": {
                    "x": 0,
                    "y": 1
                },
                "no": {
                    "x": 0,
                    "y": 0
                }
            }
        }
    },
    {
        "question": "Should society push companies to adopt diversity quotas and redirect resources to social programs to address historical and societal inequalities?",
        "points": {
            "yes": {
                "x": -1,
                "y": 0
            },
            "no": {
                "x": 1,
                "y": 0
            }
        },
        "subquestion": {
            "question": "Should the government mandate companies to implement diversity quotas and redirect tax revenues to fund social programs aimed at addressing historical and societal inequalities?",
            "points": {
                "yes": {
                    "x": 0,
                    "y": 1
                },
                "no": {
                    "x": 0,
                    "y": 0
                }
            }
        }
    },
    {
        "question": "Those who are wealthier should contribute monetary to societal needs?",
        "points": {
            "yes": {
                "x": -1,
                "y": 0
            },
            "no": {
                "x": 1,
                "y": 0
            }
        },
        "subquestion": {
            "question": "Should the government impose taxes or policies to ensure wealthier individuals contribute more to society?",
            "points": {
                "yes": {
                    "x": 0,
                    "y": 1
                },
                "no": {
                    "x": 0,
                    "y": 0
                }
            }
        }
    },
    {
        "question": "Individuals should prioritize the welfare of animals by avoiding hunting or using products tested on animals?",
        "points": {
            "yes": {
                "x": -1,
                "y": 0
            },
            "no": {
                "x": 1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government implement laws regulating hunting?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Reallocating Police Resources for Targeted Community Services like Substance Abuse Treatment Programs.?",
        "points": {
            "yes": {
                "x": -1,
                "y": 0
            },
            "no": {
                "x": 1,
                "y": 0
            }
        },
        "subquestion": {
            "question": "Should the government shift public funding from policing to community-based services like Youth Development Programs?",
            "points": {
                "yes": {
                    "x": 0,
                    "y": 1
                },
                "no": {
                    "x": 0,
                    "y": 0
                }
            }
        }
    },
    {
        "question": "People should have the right to own and use firearms for self-defense or recreational purposes?",
        "points": {
            "yes": {
                "x": 1,
                "y": 0
            },
            "no": {
                "x": -1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government regulate if someone can own firearms?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Individuals should be free to express their opinions, even if others find them offensive or controversial?",
        "points": {
            "yes": {
                "x": 1,
                "y": 0
            },
            "no": {
                "x": -1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government have any authority over regulating free speech?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Parents should have the right to homeschool children according to their personal values and beliefs?",
        "points": {
            "yes": {
                "x": 1,
                "y": 0
            },
            "no": {
                "x": -1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government set rules or standards for homeschooling?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Individuals and businesses should have the right to choose whom they serve or associate with, based on personal preference?",
        "points": {
            "yes": {
                "x": 1,
                "y": 0
            },
            "no": {
                "x": -1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government have any laws regulating who businesses can or cannot serve?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Some religions are more harmful or problematic than others?",
        "points": {
            "yes": {
                "x": 1,
                "y": 0
            },
            "no": {
                "x": -1,
                "y": 0
            }
        },
        "subquestion": {
            "question": "Should the government have any role in regulating or limiting the influence of specific religions?",
            "points": {
                "yes": {
                    "x": 0,
                    "y": 1
                },
                "no": {
                    "x": 0,
                    "y": 0
                }
            }
        }
    },
    {
        "question": "National identity and cultural values should take precedence over international or global interests?",
        "points": {
            "yes": {
                "x": 1,
                "y": 0
            },
            "no": {
                "x": -1,
                "y": 0
            }
        },
        "subquestion": {
            "question": "Should the government enforce policies that prioritize national interests over global cooperation?",
            "points": {
                "yes": {
                    "x": 0,
                    "y": 1
                },
                "no": {
                    "x": 0,
                    "y": 0
                }
            }
        }
    },
    {
        "question": "Is important for children to be taught religious values as part of their upbringing, either at home or through religious institutions?",
        "points": {
            "yes": {
                "x": 1,
                "y": 0
            },
            "no": {
                "x": -1,
                "y": 0
            }
        }
    },
    {
        "question": "Should the government deny or mandate religious education in schools or public institutions?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "It’s important to personally support and honor the military's role in defending the country?",
        "points": {
            "yes": {
                "x": 1,
                "y": 0
            },
            "no": {
                "x": -1,
                "y": 0
            }
        },
        "subquestion": {
            "question": "Should the government continue to heavily fund the military and promote national defense?",
            "points": {
                "yes": {
                    "x": 0,
                    "y": 1
                },
                "no": {
                    "x": 0,
                    "y": 0
                }
            }
        }
    },
    {
        "question": "Combating threats like terrorism and pedophilia is more important than ensuring personal privacy?",
        "points": {
            "yes": {
                "x": 1,
                "y": 0
            },
            "no": {
                "x": -1,
                "y": 0
            }
        },
        "subquestion": {
            "question": "Should the government have the right to limit individual privacy in order to prevent serious threats like terrorism and pedophilia?",
            "points": {
                "yes": {
                    "x": 0,
                    "y": 1
                },
                "no": {
                    "x": 0,
                    "y": 0
                }
            }
        }
    },
    {
        "question": "Should the government heavily subsidize public transportation?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should education be free and guaranteed by the government?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should healthcare be free and provided by the government?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government set a minimum wage and regulate labor conditions?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government provide foreign aid to other countries?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government impose strict regulations during pandemics (e.g., lockdowns, mask mandates)?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government provide a guaranteed basic income to all citizens?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government invest in infrastructure (roads, bridges, etc.)?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government protect democratic institutions, even if it means greater oversight?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government enforce copyright laws to protect intellectual property?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government provide subsidies to companies to help create jobs?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should there be higher taxes to pay for more government services?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government regulate quality control in industries?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government have control over pricing for essential goods?",
        "points": {
            "yes": {
                "x": 0,
                "y": 1
            },
            "no": {
                "x": 0,
                "y": -1
            }
        }
    },
    {
        "question": "Should the government give more rights for some people that others?",
        "points": {
            "yes": {
                "x": 0,
                "y": 3
            },
            "no": {
                "x": 0,
                "y": -3
            }
        }
    }
];