var questions = [
  {
    "question": "Os indivíduos deveriam ter a liberdade de usar e experimentar drogas se assim o desejarem?",
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
    "question": "O governo deveria regular ou restringir o uso de drogas de alguma forma?",
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
    "question": "Os indivíduos têm o direito de escolher se querem fazer um aborto com base nas suas circunstâncias pessoais?",
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
    "question": "O governo deveria criar leis que regulem o acesso ao aborto, seja para restringi-lo ou protegê-lo?",
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
    "question": "Casais do mesmo sexo deveriam ter o direito de adotar crianças?",
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
    "question": "O governo deveria estabelecer leis específicas sobre quem pode ou não adotar crianças?",
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
    "question": "A imparcialidade e a justiça devem ser mantidas em disputas e acusações pessoais, garantindo tratamento igual para todas as partes?",
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
    "question": "Dada a sua posição, o governo deveria fazer cumprir e manter o sistema de justiça?",
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
    "question": "As alterações climáticas são uma ameaça real e as pessoas deveriam tomar medidas pessoais para ajudar a detê-las?",
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
      "question": "Deverá o governo aplicar leis ou políticas para mitigar as alterações climáticas e promover as energias renováveis?",
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
    "question": "A sociedade deveria tomar medidas activas para abordar a desigualdade racial e apoiar a diversidade nas comunidades ou nos locais de trabalho?",
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
      "question": "Deveria o governo ser responsável pela aplicação de medidas que garantam a igualdade e a diversidade racial?",
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
    "question": "Aqueles que são mais ricos deveriam contribuir mais para as necessidades da sociedade?",
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
      "question": "Deverá o governo impor impostos ou políticas para garantir que os indivíduos mais ricos contribuam mais para a sociedade?",
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
    "question": "Os indivíduos devem priorizar o bem-estar dos animais, evitando a caça ou utilizando produtos testados em animais?",
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
    "question": "O governo deveria implementar leis que regulamentassem as cabanas?",
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
    "question": "Os recursos policiais deveriam ser reduzidos e redirecionados para serviços comunitários como cuidados de saúde mental?",
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
      "question": "Deverá o governo transferir o financiamento público do policiamento para serviços comunitários?",
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
    "question": "As pessoas deveriam ter o direito de possuir e usar armas de fogo para autodefesa ou para fins recreativos?",
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
    "question": "O governo deveria regulamentar se alguém pode possuir armas de fogo?",
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
    "question": "Os indivíduos deveriam ser livres para expressar as suas opiniões, mesmo que outros as considerem ofensivas ou controversas?",
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
    "question": "O governo deveria ter alguma autoridade sobre a regulação da liberdade de expressão?",
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
    "question": "Os pais deveriam ter o direito de educar os seus filhos em casa de acordo com os seus valores e crenças pessoais?",
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
    "question": "O governo deveria estabelecer regras ou padrões para o ensino doméstico?",
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
    "question": "Indivíduos e empresas deveriam ter o direito de escolher a quem servir ou com quem se associar, com base na preferência pessoal?",
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
    "question": "O governo deveria ter alguma lei regulamentando quem as empresas podem ou não servir?",
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
    "question": "Algumas religiões são mais prejudiciais ou problemáticas do que outras?",
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
      "question": "Deveria o governo ter algum papel na regulação ou limitação da influência de religiões específicas?",
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
    "question": "A identidade nacional e os valores culturais devem ter precedência sobre os interesses internacionais ou globais?",
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
      "question": "Deverá o governo aplicar políticas que priorizem os interesses nacionais em detrimento da cooperação global?",
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
    "question": "É importante que as crianças aprendam valores religiosos como parte da sua educação, seja em casa ou através de instituições religiosas?",
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
    "question": "Deverá o governo permitir ou exigir a educação religiosa nas escolas ou instituições públicas?",
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
    "question": "É importante apoiar e honrar pessoalmente o papel dos militares na defesa do país?",
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
      "question": "Deverá o governo continuar a financiar fortemente as forças armadas e a promover a defesa nacional?",
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
    "question": "Combater ameaças como o terrorismo e a pedofilia é mais importante do que garantir a privacidade pessoal?",
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
      "question": "Deveria o governo ter o direito de limitar a privacidade individual, a fim de prevenir ameaças graves como o terrorismo e a pedofilia?",
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
    "question": "O governo deveria subsidiar fortemente o transporte público?",
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
    "question": "A educação deveria ser gratuita e garantida pelo governo?",
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
    "question": "Os cuidados de saúde deveriam ser gratuitos e fornecidos pelo governo?",
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
    "question": "O governo deveria estabelecer um salário mínimo e regular as condições de trabalho?",
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
    "question": "O governo deveria fornecer ajuda externa a outros países?",
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
    "question": "O governo deveria impor regulamentações rigorosas durante pandemias (por exemplo, bloqueios, obrigatoriedade de uso de máscara)?",
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
    "question": "O governo deveria fornecer uma renda básica garantida a todos os cidadãos?",
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
    "question": "O governo deveria investir em infra-estruturas (estradas, pontes, etc.)?",
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
    "question": "Deverá o governo proteger as instituições democráticas, mesmo que isso signifique maior supervisão?",
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
    "question": "O governo deveria fazer cumprir as leis de direitos autorais para proteger a propriedade intelectual?",
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
    "question": "O governo deveria fornecer subsídios às empresas para ajudar a criar empregos?",
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
    "question": "Deveria haver impostos mais elevados para pagar mais serviços governamentais?",
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
    "question": "O governo deveria regulamentar o controle de qualidade nas indústrias?",
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
    "question": "O governo deveria ter controle sobre os preços dos bens essenciais?",
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
    "question": "O governo deveria dar mais direitos a algumas pessoas do que a outras?",
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