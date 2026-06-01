// Tour de Cicle Indoor — Dataset final

const DADOS = {
  "pontos_cat": {
    "PRO FEMININO": [
      {
        "pos": 1,
        "atleta": "Lívia Revoredo",
        "pts": 75
      },
      {
        "pos": 2,
        "atleta": "Isadora Meybel",
        "pts": 56
      },
      {
        "pos": 3,
        "atleta": "Camila Mota",
        "pts": 52
      },
      {
        "pos": 4,
        "atleta": "Allyne França",
        "pts": 50
      },
      {
        "pos": 5,
        "atleta": "Andreia Araujo",
        "pts": 48
      },
      {
        "pos": 6,
        "atleta": "Ana Azevedo",
        "pts": 43
      },
      {
        "pos": 7,
        "atleta": "Beatriz Bezerra",
        "pts": 42
      },
      {
        "pos": 7,
        "atleta": "Giuly Giardinni",
        "pts": 42
      },
      {
        "pos": 9,
        "atleta": "Heloisa Lopes",
        "pts": 32
      },
      {
        "pos": 10,
        "atleta": "Vivi",
        "pts": 15
      },
      {
        "pos": 11,
        "atleta": "Vanessa Rodrigues",
        "pts": 14
      },
      {
        "pos": 12,
        "atleta": "Helena Jales",
        "pts": 9
      },
      {
        "pos": 13,
        "atleta": "Maria Karolina",
        "pts": 8
      },
      {
        "pos": 14,
        "atleta": "Renata Ivia",
        "pts": 5
      },
      {
        "pos": 15,
        "atleta": "Fernanda Veloso",
        "pts": 4
      },
      {
        "pos": 16,
        "atleta": "Helena Jales",
        "pts": 0
      }
    ],
    "ELITE FEMININO": [
      {
        "pos": 1,
        "atleta": "Simone Ribeiro",
        "pts": 74
      },
      {
        "pos": 2,
        "atleta": "Andréia Medeiros",
        "pts": 72
      },
      {
        "pos": 3,
        "atleta": "Joyce Ribeiro",
        "pts": 65
      },
      {
        "pos": 4,
        "atleta": "Alini Brito",
        "pts": 50
      },
      {
        "pos": 4,
        "atleta": "Cris Diniz",
        "pts": 50
      },
      {
        "pos": 6,
        "atleta": "Sarah Brito",
        "pts": 47
      },
      {
        "pos": 7,
        "atleta": "Renata Seixas",
        "pts": 38
      },
      {
        "pos": 8,
        "atleta": "Silvia Drummond",
        "pts": 36
      },
      {
        "pos": 9,
        "atleta": "Raissa Georgia",
        "pts": 21
      },
      {
        "pos": 10,
        "atleta": "Hívila Moreira",
        "pts": 14
      },
      {
        "pos": 11,
        "atleta": "Jannaina Queiroz",
        "pts": 13
      },
      {
        "pos": 12,
        "atleta": "Louise Smith",
        "pts": 11
      },
      {
        "pos": 13,
        "atleta": "Karine Symonir",
        "pts": 8
      },
      {
        "pos": 14,
        "atleta": "Oona Lopes",
        "pts": 5
      },
      {
        "pos": 15,
        "atleta": "Gisele",
        "pts": 2
      },
      {
        "pos": 16,
        "atleta": "Lydia Tinôco",
        "pts": 1
      }
    ],
    "PRO MASCULINO": [
      {
        "pos": 1,
        "atleta": "Olisuel Pereira",
        "pts": 69
      },
      {
        "pos": 2,
        "atleta": "Bruno Cabral",
        "pts": 65
      },
      {
        "pos": 3,
        "atleta": "José Arimatéia",
        "pts": 64
      },
      {
        "pos": 4,
        "atleta": "Washington Filho",
        "pts": 52
      },
      {
        "pos": 4,
        "atleta": "César Maia",
        "pts": 52
      },
      {
        "pos": 6,
        "atleta": "Edu Silva",
        "pts": 42
      },
      {
        "pos": 7,
        "atleta": "Arthur Dantas",
        "pts": 40
      },
      {
        "pos": 8,
        "atleta": "Luerber Oscar",
        "pts": 32
      },
      {
        "pos": 9,
        "atleta": "Carlos Thompson",
        "pts": 27
      },
      {
        "pos": 10,
        "atleta": "Haroldo Duarte",
        "pts": 22
      },
      {
        "pos": 11,
        "atleta": "Dowglas",
        "pts": 14
      },
      {
        "pos": 12,
        "atleta": "Kleber Gentil",
        "pts": 8
      },
      {
        "pos": 13,
        "atleta": "Luiz Marcelo",
        "pts": 7
      },
      {
        "pos": 14,
        "atleta": "Elistenio Pai",
        "pts": 1
      },
      {
        "pos": 14,
        "atleta": "Emanoel",
        "pts": 1
      },
      {
        "pos": 14,
        "atleta": "Igor Rosado",
        "pts": 1
      }
    ],
    "ELITE MASCULINO": [
      {
        "pos": 1,
        "atleta": "Sergio Torralba",
        "pts": 69
      },
      {
        "pos": 2,
        "atleta": "Omar Dantas",
        "pts": 63
      },
      {
        "pos": 3,
        "atleta": "Elionai",
        "pts": 60
      },
      {
        "pos": 4,
        "atleta": "Sivonaldo Tercio",
        "pts": 55
      },
      {
        "pos": 5,
        "atleta": "Lucas Leonardo",
        "pts": 50
      },
      {
        "pos": 6,
        "atleta": "Genival Ferreira",
        "pts": 44
      },
      {
        "pos": 7,
        "atleta": "Neto Xavier",
        "pts": 43
      },
      {
        "pos": 8,
        "atleta": "Danilo Vale",
        "pts": 27
      },
      {
        "pos": 9,
        "atleta": "Diogo Almeida",
        "pts": 22
      },
      {
        "pos": 10,
        "atleta": "Bira Carratu",
        "pts": 20
      },
      {
        "pos": 11,
        "atleta": "Daniel Azevedo",
        "pts": 18
      },
      {
        "pos": 12,
        "atleta": "Renato Araújo",
        "pts": 14
      },
      {
        "pos": 13,
        "atleta": "Rafael Povoas",
        "pts": 11
      },
      {
        "pos": 14,
        "atleta": "Fabrício Barros",
        "pts": 8
      },
      {
        "pos": 15,
        "atleta": "Gringo",
        "pts": 7
      },
      {
        "pos": 16,
        "atleta": "Eduardo",
        "pts": 1
      }
    ],
    "SUB-26 FEMININO": [
      {
        "pos": 1,
        "atleta": "Maria J. Nóbrega",
        "pts": 75
      },
      {
        "pos": 2,
        "atleta": "Júlia Rocha",
        "pts": 72
      },
      {
        "pos": 3,
        "atleta": "Luciana Maria",
        "pts": 71
      },
      {
        "pos": 4,
        "atleta": "Laura Negreiros",
        "pts": 56
      },
      {
        "pos": 5,
        "atleta": "Livia Darc",
        "pts": 54
      },
      {
        "pos": 6,
        "atleta": "Isabel Lucena",
        "pts": 37
      },
      {
        "pos": 7,
        "atleta": "Samara Silva",
        "pts": 29
      },
      {
        "pos": 8,
        "atleta": "Carol Negreiros",
        "pts": 28
      },
      {
        "pos": 9,
        "atleta": "Luna Melo",
        "pts": 24
      },
      {
        "pos": 10,
        "atleta": "Jessica",
        "pts": 22
      }
    ],
    "SUB-26 MASCULINO": [
      {
        "pos": 1,
        "atleta": "Lucas Eurípides",
        "pts": 88
      },
      {
        "pos": 2,
        "atleta": "Victor Barbosa",
        "pts": 66
      },
      {
        "pos": 2,
        "atleta": "João Menezes",
        "pts": 66
      },
      {
        "pos": 4,
        "atleta": "Joao Pedro",
        "pts": 65
      },
      {
        "pos": 5,
        "atleta": "José Wilson",
        "pts": 57
      },
      {
        "pos": 6,
        "atleta": "Matheus Alves",
        "pts": 33
      },
      {
        "pos": 7,
        "atleta": "Duduzinho",
        "pts": 29
      },
      {
        "pos": 7,
        "atleta": "Allan Oliveira",
        "pts": 29
      },
      {
        "pos": 9,
        "atleta": "Artur Sena",
        "pts": 18
      },
      {
        "pos": 10,
        "atleta": "Francisco Vito",
        "pts": 13
      },
      {
        "pos": 11,
        "atleta": "Elistenio Filho",
        "pts": 7
      },
      {
        "pos": 11,
        "atleta": "Luiz César",
        "pts": 7
      }
    ],
    "MASTER FEMININO": [
      {
        "pos": 1,
        "atleta": "Ana P. Mendes",
        "pts": 77
      },
      {
        "pos": 2,
        "atleta": "Liege",
        "pts": 75
      },
      {
        "pos": 3,
        "atleta": "Socorro Linhares",
        "pts": 59
      },
      {
        "pos": 4,
        "atleta": "Claudia Regina",
        "pts": 48
      },
      {
        "pos": 5,
        "atleta": "Chiyo da Silva",
        "pts": 41
      },
      {
        "pos": 6,
        "atleta": "Fernanda Fernandes",
        "pts": 37
      },
      {
        "pos": 7,
        "atleta": "Alzinalia Lopes",
        "pts": 34
      },
      {
        "pos": 8,
        "atleta": "Katia Cunha",
        "pts": 33
      },
      {
        "pos": 9,
        "atleta": "Gerusia",
        "pts": 22
      },
      {
        "pos": 9,
        "atleta": "Sheila Sales",
        "pts": 22
      },
      {
        "pos": 11,
        "atleta": "Alê Agra",
        "pts": 13
      },
      {
        "pos": 12,
        "atleta": "Adriana Caldas",
        "pts": 5
      }
    ],
    "MASTER MASCULINO": [
      {
        "pos": 1,
        "atleta": "Raimundo Romão",
        "pts": 70
      },
      {
        "pos": 1,
        "atleta": "Arthur Martins",
        "pts": 70
      },
      {
        "pos": 3,
        "atleta": "Orlando Cunha",
        "pts": 67
      },
      {
        "pos": 4,
        "atleta": "Alberto",
        "pts": 46
      },
      {
        "pos": 5,
        "atleta": "César Britto",
        "pts": 41
      },
      {
        "pos": 6,
        "atleta": "André Fernandes",
        "pts": 32
      },
      {
        "pos": 7,
        "atleta": "Onaldo Dantas",
        "pts": 31
      },
      {
        "pos": 8,
        "atleta": "Armando Nóbrega",
        "pts": 29
      },
      {
        "pos": 9,
        "atleta": "Wilson Chacon",
        "pts": 24
      },
      {
        "pos": 10,
        "atleta": "Maurício",
        "pts": 23
      },
      {
        "pos": 11,
        "atleta": "Rogério Dantas",
        "pts": 18
      },
      {
        "pos": 12,
        "atleta": "Daniel Freire",
        "pts": 17
      }
    ]
  },
  "ranking_geral_masc": [
    {
      "pos": 1,
      "atleta": "Sergio Torralba",
      "pts": 67
    },
    {
      "pos": 2,
      "atleta": "Elionai",
      "pts": 57
    },
    {
      "pos": 3,
      "atleta": "Sivonaldo Tercio",
      "pts": 53
    },
    {
      "pos": 3,
      "atleta": "Omar Dantas",
      "pts": 53
    },
    {
      "pos": 5,
      "atleta": "Lucas Leonardo",
      "pts": 49
    },
    {
      "pos": 6,
      "atleta": "Neto Xavier",
      "pts": 35
    },
    {
      "pos": 7,
      "atleta": "Genival Ferreira",
      "pts": 30
    },
    {
      "pos": 8,
      "atleta": "Danilo Vale",
      "pts": 21
    },
    {
      "pos": 9,
      "atleta": "Diogo Almeida",
      "pts": 20
    },
    {
      "pos": 10,
      "atleta": "Arthur Martins",
      "pts": 14
    },
    {
      "pos": 10,
      "atleta": "Bruno Cabral",
      "pts": 14
    },
    {
      "pos": 12,
      "atleta": "Daniel Azevedo",
      "pts": 12
    },
    {
      "pos": 13,
      "atleta": "Arthur Dantas",
      "pts": 11
    },
    {
      "pos": 14,
      "atleta": "Bira Carratu",
      "pts": 10
    },
    {
      "pos": 14,
      "atleta": "Raimundo Romão",
      "pts": 10
    },
    {
      "pos": 16,
      "atleta": "Carlos Thompson",
      "pts": 9
    },
    {
      "pos": 16,
      "atleta": "Lucas Eurípides",
      "pts": 9
    },
    {
      "pos": 18,
      "atleta": "José Arimatéia",
      "pts": 7
    },
    {
      "pos": 19,
      "atleta": "César Maia",
      "pts": 5
    },
    {
      "pos": 20,
      "atleta": "Renato Araújo",
      "pts": 1
    },
    {
      "pos": 20,
      "atleta": "João Menezes",
      "pts": 1
    }
  ],
  "ranking_geral_fem": [
    {
      "pos": 1,
      "atleta": "Simone Ribeiro",
      "pts": 69
    },
    {
      "pos": 2,
      "atleta": "Andréia Medeiros",
      "pts": 64
    },
    {
      "pos": 3,
      "atleta": "Joyce Ribeiro",
      "pts": 55
    },
    {
      "pos": 4,
      "atleta": "Cris Diniz",
      "pts": 50
    },
    {
      "pos": 5,
      "atleta": "Alini Brito",
      "pts": 46
    },
    {
      "pos": 6,
      "atleta": "Maria J. Nóbrega",
      "pts": 45
    },
    {
      "pos": 7,
      "atleta": "Sarah Brito",
      "pts": 38
    },
    {
      "pos": 8,
      "atleta": "Renata Seixas",
      "pts": 33
    },
    {
      "pos": 9,
      "atleta": "Lívia Revoredo",
      "pts": 25
    },
    {
      "pos": 10,
      "atleta": "Silvia Drummond",
      "pts": 20
    },
    {
      "pos": 11,
      "atleta": "Heloisa Lopes",
      "pts": 17
    },
    {
      "pos": 12,
      "atleta": "Ana Azevedo",
      "pts": 11
    },
    {
      "pos": 13,
      "atleta": "Louise Smith",
      "pts": 9
    },
    {
      "pos": 13,
      "atleta": "Júlia Rocha",
      "pts": 9
    },
    {
      "pos": 15,
      "atleta": "Raissa Georgia",
      "pts": 8
    },
    {
      "pos": 16,
      "atleta": "Jannaina Queiroz",
      "pts": 5
    },
    {
      "pos": 17,
      "atleta": "Andreia Araujo",
      "pts": 3
    },
    {
      "pos": 17,
      "atleta": "Giuly Giardinni",
      "pts": 3
    },
    {
      "pos": 19,
      "atleta": "Liege",
      "pts": 1
    }
  ],
  "equipes_cat": {
    "ELITE FEMININO": [
      {
        "pos": 1,
        "academia": "BT NS",
        "cr10k": 25,
        "ld30k": 25,
        "ftp": 25,
        "montanha": 25,
        "total": 75
      },
      {
        "pos": 2,
        "academia": "BT TIROL",
        "cr10k": 20,
        "ld30k": 20,
        "ftp": 17,
        "montanha": 20,
        "total": 57
      },
      {
        "pos": 3,
        "academia": "AABB",
        "cr10k": 15,
        "ld30k": 15,
        "ftp": 20,
        "montanha": 15,
        "total": 50
      },
      {
        "pos": 4,
        "academia": "PULSE",
        "cr10k": 17,
        "ld30k": 17,
        "ftp": 15,
        "montanha": 17,
        "total": 49
      }
    ],
    "ELITE MASCULINO": [
      {
        "pos": 1,
        "academia": "PULSE",
        "cr10k": 20,
        "ld30k": 20,
        "ftp": 25,
        "montanha": 20,
        "total": 65
      },
      {
        "pos": 2,
        "academia": "BT NS",
        "cr10k": 25,
        "ld30k": 25,
        "ftp": 20,
        "montanha": 15,
        "total": 60
      },
      {
        "pos": 3,
        "academia": "AABB",
        "cr10k": 15,
        "ld30k": 15,
        "ftp": 17,
        "montanha": 25,
        "total": 57
      },
      {
        "pos": 4,
        "academia": "BT TIROL",
        "cr10k": 17,
        "ld30k": 17,
        "ftp": 15,
        "montanha": 17,
        "total": 49
      }
    ],
    "PRO FEMININO": [
      {
        "pos": 1,
        "academia": "BT NS",
        "cr10k": 25,
        "ld30k": 25,
        "ftp": 25,
        "montanha": 25,
        "total": 75
      },
      {
        "pos": 2,
        "academia": "AABB",
        "cr10k": 20,
        "ld30k": 20,
        "ftp": 20,
        "montanha": 20,
        "total": 60
      },
      {
        "pos": 3,
        "academia": "BT TIROL",
        "cr10k": 17,
        "ld30k": 17,
        "ftp": 17,
        "montanha": 17,
        "total": 51
      },
      {
        "pos": 4,
        "academia": "PULSE",
        "cr10k": 13,
        "ld30k": 13,
        "ftp": 15,
        "montanha": 15,
        "total": 43
      }
    ],
    "PRO MASCULINO": [
      {
        "pos": 1,
        "academia": "AABB",
        "cr10k": 25,
        "ld30k": 25,
        "ftp": 25,
        "montanha": 25,
        "total": 75
      },
      {
        "pos": 2,
        "academia": "PULSE",
        "cr10k": 20,
        "ld30k": 20,
        "ftp": 20,
        "montanha": 20,
        "total": 60
      },
      {
        "pos": 3,
        "academia": "BT NS",
        "cr10k": 17,
        "ld30k": 17,
        "ftp": 17,
        "montanha": 17,
        "total": 51
      },
      {
        "pos": 4,
        "academia": "BT TIROL",
        "cr10k": 0,
        "ld30k": 0,
        "ftp": 13,
        "montanha": 15,
        "total": 28
      }
    ],
    "MASTER": [
      {
        "pos": 1,
        "academia": "BT TIROL",
        "cr10k": 20,
        "ld30k": 20,
        "ftp": 25,
        "montanha": 20,
        "total": 65
      },
      {
        "pos": 2,
        "academia": "BT NS",
        "cr10k": 25,
        "ld30k": 25,
        "ftp": 17,
        "montanha": 17,
        "total": 59
      },
      {
        "pos": 3,
        "academia": "PULSE",
        "cr10k": 17,
        "ld30k": 17,
        "ftp": 13,
        "montanha": 25,
        "total": 55
      },
      {
        "pos": 4,
        "academia": "AABB",
        "cr10k": 15,
        "ld30k": 15,
        "ftp": 20,
        "montanha": 15,
        "total": 50
      }
    ],
    "SUB-26": [
      {
        "pos": 1,
        "academia": "AABB",
        "cr10k": 25,
        "ld30k": 25,
        "ftp": 17,
        "montanha": 25,
        "total": 67
      },
      {
        "pos": 2,
        "academia": "BT TIROL",
        "cr10k": 17,
        "ld30k": 17,
        "ftp": 25,
        "montanha": 15,
        "total": 57
      },
      {
        "pos": 3,
        "academia": "PULSE",
        "cr10k": 15,
        "ld30k": 15,
        "ftp": 20,
        "montanha": 20,
        "total": 55
      },
      {
        "pos": 4,
        "academia": "BT NS",
        "cr10k": 20,
        "ld30k": 20,
        "ftp": 15,
        "montanha": 17,
        "total": 52
      }
    ]
  },
  "equipes_geral": [
    {
      "pos": 1,
      "academia": "BT NS",
      "cr10k": 115,
      "ld30k": 137,
      "ftp": 119,
      "montanha": 124,
      "total": 495
    },
    {
      "pos": 2,
      "academia": "AABB",
      "cr10k": 120,
      "ld30k": 115,
      "ftp": 119,
      "montanha": 125,
      "total": 479
    },
    {
      "pos": 3,
      "academia": "PULSE",
      "cr10k": 114,
      "ld30k": 102,
      "ftp": 108,
      "montanha": 117,
      "total": 441
    },
    {
      "pos": 4,
      "academia": "BT TIROL",
      "cr10k": 111,
      "ld30k": 91,
      "ftp": 112,
      "montanha": 104,
      "total": 418
    }
  ],
  "tempos": [
    {
      "nome": "Bruno Cabral",
      "academia": "AABB",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:09",
      "ftp_final_s": 9,
      "montanha": "00:24:33",
      "montanha_s": 1473,
      "cr10k": "00:14:59",
      "cr10k_s": 899,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:39:41",
      "tempo_total_s": 2381,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Adriana Melo",
      "academia": "PULSE",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:20:09",
      "cr10k_s": 1209,
      "ld30k": "01:00:00",
      "ld30k_s": 3600,
      "tempo_total": "01:20:09",
      "tempo_total_s": 4809,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Fernanda Veloso",
      "academia": "PULSE",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:21",
      "ftp_final_s": 21,
      "montanha": "00:30:00",
      "montanha_s": 1800,
      "cr10k": "00:19:09",
      "cr10k_s": 1149,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:49:30",
      "tempo_total_s": 2970,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Carlos Thompson",
      "academia": "BT TIROL",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:10",
      "ftp_final_s": 10,
      "montanha": "00:26:00",
      "montanha_s": 1560,
      "cr10k": "00:16:08",
      "cr10k_s": 968,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:42:18",
      "tempo_total_s": 2538,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "LIEGE",
      "academia": "PULSE",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": "00:00:09",
      "ftp_final_s": 9,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:16:52",
      "cr10k_s": 1012,
      "ld30k": "00:50:14",
      "ld30k_s": 3014,
      "tempo_total": "01:07:15",
      "tempo_total_s": 4035,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Simone Ribeiro",
      "academia": "BT NS",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:04",
      "ftp_final_s": 4,
      "montanha": "00:26:23",
      "montanha_s": 1583,
      "cr10k": "00:15:48",
      "cr10k_s": 948,
      "ld30k": "00:48:05",
      "ld30k_s": 2885,
      "tempo_total": "01:30:20",
      "tempo_total_s": 5420,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Francisco Vito",
      "academia": "PULSE",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:26:53",
      "montanha_s": 1613,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:26:53",
      "tempo_total_s": 1613,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Andréia Medeiros",
      "academia": "BT TIROL",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": "00:26:19",
      "montanha_s": 1579,
      "cr10k": "00:15:35",
      "cr10k_s": 935,
      "ld30k": "00:48:16",
      "ld30k_s": 2896,
      "tempo_total": "01:30:21",
      "tempo_total_s": 5421,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Joyce Ribeiro",
      "academia": "BT NS",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": "00:26:54",
      "montanha_s": 1614,
      "cr10k": "00:15:35",
      "cr10k_s": 935,
      "ld30k": "00:48:01",
      "ld30k_s": 2881,
      "tempo_total": "01:30:41",
      "tempo_total_s": 5441,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Vanessa Rodrigues",
      "academia": "BT TIROL",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:14",
      "ftp_final_s": 14,
      "montanha": "00:29:36",
      "montanha_s": 1776,
      "cr10k": "00:18:12",
      "cr10k_s": 1092,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:48:02",
      "tempo_total_s": 2882,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Alzinalia Lopes",
      "academia": "BT NS",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:29:10",
      "montanha_s": 1750,
      "cr10k": "00:17:42",
      "cr10k_s": 1062,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:46:52",
      "tempo_total_s": 2812,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Onaldo Dantas",
      "academia": "AABB",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": "00:00:16",
      "ftp_final_s": 16,
      "montanha": "00:25:45",
      "montanha_s": 1545,
      "cr10k": "00:16:23",
      "cr10k_s": 983,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:42:24",
      "tempo_total_s": 2544,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Renata Seixas",
      "academia": "BT TIROL",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:17",
      "ftp_final_s": 17,
      "montanha": "00:26:45",
      "montanha_s": 1605,
      "cr10k": "00:16:03",
      "cr10k_s": 963,
      "ld30k": "00:49:42",
      "ld30k_s": 2982,
      "tempo_total": "01:32:47",
      "tempo_total_s": 5567,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Sarah Brito",
      "academia": "AABB",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:09",
      "ftp_final_s": 9,
      "montanha": "00:27:10",
      "montanha_s": 1630,
      "cr10k": "00:16:19",
      "cr10k_s": 979,
      "ld30k": "00:49:48",
      "ld30k_s": 2988,
      "tempo_total": "01:33:26",
      "tempo_total_s": 5606,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Omar Dantas",
      "academia": "BT NS",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:13",
      "ftp_final_s": 13,
      "montanha": "00:22:45",
      "montanha_s": 1365,
      "cr10k": "00:13:57",
      "cr10k_s": 837,
      "ld30k": "00:41:42",
      "ld30k_s": 2502,
      "tempo_total": "01:18:37",
      "tempo_total_s": 4717,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Elionai",
      "academia": "PULSE",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:07",
      "ftp_final_s": 7,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:13:21",
      "cr10k_s": 801,
      "ld30k": "00:41:53",
      "ld30k_s": 2513,
      "tempo_total": "00:55:21",
      "tempo_total_s": 3321,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Sergio Torralba",
      "academia": "BT TIROL",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:03",
      "ftp_final_s": 3,
      "montanha": "00:23:04",
      "montanha_s": 1384,
      "cr10k": "00:13:43",
      "cr10k_s": 823,
      "ld30k": "00:41:55",
      "ld30k_s": 2515,
      "tempo_total": "01:18:45",
      "tempo_total_s": 4725,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Raimundo Romão",
      "academia": "BT NS",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:15:01",
      "cr10k_s": 901,
      "ld30k": "00:43:44",
      "ld30k_s": 2624,
      "tempo_total": "00:58:56",
      "tempo_total_s": 3536,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Silvia Drummond",
      "academia": "AABB",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": "00:27:54",
      "montanha_s": 1674,
      "cr10k": "00:16:31",
      "cr10k_s": 991,
      "ld30k": "00:48:55",
      "ld30k_s": 2935,
      "tempo_total": "01:33:31",
      "tempo_total_s": 5611,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "César Maia",
      "academia": "AABB",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:16",
      "ftp_final_s": 16,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:14:21",
      "cr10k_s": 861,
      "ld30k": "00:45:50",
      "ld30k_s": 2750,
      "tempo_total": "01:00:27",
      "tempo_total_s": 3627,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Lucas Leonardo",
      "academia": "PULSE",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:12",
      "ftp_final_s": 12,
      "montanha": "00:22:47",
      "montanha_s": 1367,
      "cr10k": "00:13:41",
      "cr10k_s": 821,
      "ld30k": "00:42:57",
      "ld30k_s": 2577,
      "tempo_total": "01:19:37",
      "tempo_total_s": 4777,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Genival Ferreira",
      "academia": "AABB",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": "00:23:37",
      "montanha_s": 1417,
      "cr10k": "00:14:06",
      "cr10k_s": 846,
      "ld30k": "00:44:28",
      "ld30k_s": 2668,
      "tempo_total": "01:22:22",
      "tempo_total_s": 4942,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Maria Karolina",
      "academia": "BT TIROL",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:30:47",
      "montanha_s": 1847,
      "cr10k": "00:17:17",
      "cr10k_s": 1037,
      "ld30k": "00:54:46",
      "ld30k_s": 3286,
      "tempo_total": "01:42:50",
      "tempo_total_s": 6170,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "José Wilson",
      "academia": "PULSE",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": "00:00:13",
      "ftp_final_s": 13,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:14:43",
      "cr10k_s": 883,
      "ld30k": "00:46:42",
      "ld30k_s": 2802,
      "tempo_total": "01:01:38",
      "tempo_total_s": 3698,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Elistenio Filho",
      "academia": "BT TIROL",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:30:06",
      "montanha_s": 1806,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:30:06",
      "tempo_total_s": 1806,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Edu Silva",
      "academia": "BT NS",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:16",
      "ftp_final_s": 16,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:15:05",
      "cr10k_s": 905,
      "ld30k": "00:46:17",
      "ld30k_s": 2777,
      "tempo_total": "01:01:38",
      "tempo_total_s": 3698,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Renato Araújo",
      "academia": "AABB",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:14:39",
      "cr10k_s": 879,
      "ld30k": "00:48:12",
      "ld30k_s": 2892,
      "tempo_total": "01:03:02",
      "tempo_total_s": 3782,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Fernanda Fernandes",
      "academia": "AABB",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": "00:00:20",
      "ftp_final_s": 20,
      "montanha": "00:30:19",
      "montanha_s": 1819,
      "cr10k": "00:17:43",
      "cr10k_s": 1063,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:48:22",
      "tempo_total_s": 2902,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Sheila Sales",
      "academia": "AABB",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:17:45",
      "cr10k_s": 1065,
      "ld30k": "00:55:38",
      "ld30k_s": 3338,
      "tempo_total": "01:13:23",
      "tempo_total_s": 4403,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Andreia Araujo",
      "academia": "BT TIROL",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:21",
      "ftp_final_s": 21,
      "montanha": "00:27:33",
      "montanha_s": 1653,
      "cr10k": "00:17:18",
      "cr10k_s": 1038,
      "ld30k": "00:52:24",
      "ld30k_s": 3144,
      "tempo_total": "01:37:36",
      "tempo_total_s": 5856,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Karine Symonir",
      "academia": "PULSE",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:15",
      "ftp_final_s": 15,
      "montanha": "00:28:17",
      "montanha_s": 1697,
      "cr10k": "00:16:47",
      "cr10k_s": 1007,
      "ld30k": "00:52:25",
      "ld30k_s": 3145,
      "tempo_total": "01:37:44",
      "tempo_total_s": 5864,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Lucas Eurípides",
      "academia": "BT TIROL",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": "00:00:17",
      "ftp_final_s": 17,
      "montanha": "00:25:02",
      "montanha_s": 1502,
      "cr10k": "00:14:12",
      "cr10k_s": 852,
      "ld30k": "00:44:37",
      "ld30k_s": 2677,
      "tempo_total": "01:24:08",
      "tempo_total_s": 5048,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "André Fernandes",
      "academia": "BT TIROL",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:25:13",
      "montanha_s": 1513,
      "cr10k": "00:15:08",
      "cr10k_s": 908,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:40:21",
      "tempo_total_s": 2421,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Olisuel Pereira",
      "academia": "PULSE",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:14",
      "ftp_final_s": 14,
      "montanha": "00:24:49",
      "montanha_s": 1489,
      "cr10k": "00:14:30",
      "cr10k_s": 870,
      "ld30k": "00:45:24",
      "ld30k_s": 2724,
      "tempo_total": "01:24:57",
      "tempo_total_s": 5097,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Neto Xavier",
      "academia": "BT NS",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:00",
      "ftp_final_s": 0,
      "montanha": "00:23:38",
      "montanha_s": 1418,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:44:32",
      "ld30k_s": 2672,
      "tempo_total": "01:08:10",
      "tempo_total_s": 4090,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Dowglas",
      "academia": "BT NS",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:18",
      "ftp_final_s": 18,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:15:08",
      "cr10k_s": 908,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:15:26",
      "tempo_total_s": 926,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "José Arimatéia",
      "academia": "AABB",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": "00:24:46",
      "montanha_s": 1486,
      "cr10k": "00:14:57",
      "cr10k_s": 897,
      "ld30k": "00:46:12",
      "ld30k_s": 2772,
      "tempo_total": "01:26:06",
      "tempo_total_s": 5166,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Washington Filho",
      "academia": "BT NS",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:14",
      "ftp_final_s": 14,
      "montanha": "00:24:44",
      "montanha_s": 1484,
      "cr10k": "00:15:14",
      "cr10k_s": 914,
      "ld30k": "00:46:22",
      "ld30k_s": 2782,
      "tempo_total": "01:26:34",
      "tempo_total_s": 5194,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Fabrício Barros",
      "academia": "BT TIROL",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:17",
      "ftp_final_s": 17,
      "montanha": "00:25:00",
      "montanha_s": 1500,
      "cr10k": "00:15:11",
      "cr10k_s": 911,
      "ld30k": "00:46:13",
      "ld30k_s": 2773,
      "tempo_total": "01:26:41",
      "tempo_total_s": 5201,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Maurício",
      "academia": "PULSE",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": "00:00:20",
      "ftp_final_s": 20,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:16:22",
      "cr10k_s": 982,
      "ld30k": "00:51:31",
      "ld30k_s": 3091,
      "tempo_total": "01:08:13",
      "tempo_total_s": 4093,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Maria J nobrega",
      "academia": "BT TIROL",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": "00:00:00",
      "ftp_final_s": 0,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:16:20",
      "cr10k_s": 980,
      "ld30k": "00:49:01",
      "ld30k_s": 2941,
      "tempo_total": "01:05:21",
      "tempo_total_s": 3921,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Orlando Cunha",
      "academia": "BT TIROL",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": "00:00:16",
      "ftp_final_s": 16,
      "montanha": "00:24:51",
      "montanha_s": 1491,
      "cr10k": "00:15:19",
      "cr10k_s": 919,
      "ld30k": "00:46:17",
      "ld30k_s": 2777,
      "tempo_total": "01:26:43",
      "tempo_total_s": 5203,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Victor Barbosa",
      "academia": "PULSE",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": "00:00:15",
      "ftp_final_s": 15,
      "montanha": "00:25:16",
      "montanha_s": 1516,
      "cr10k": "00:14:49",
      "cr10k_s": 889,
      "ld30k": "00:48:10",
      "ld30k_s": 2890,
      "tempo_total": "01:28:30",
      "tempo_total_s": 5310,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "CLAUDIA REGINA",
      "academia": "BT TIROL",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": "00:00:16",
      "ftp_final_s": 16,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:17:58",
      "cr10k_s": 1078,
      "ld30k": "00:53:31",
      "ld30k_s": 3211,
      "tempo_total": "01:11:45",
      "tempo_total_s": 4305,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Vivi",
      "academia": "PULSE",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:18",
      "ftp_final_s": 18,
      "montanha": "00:30:32",
      "montanha_s": 1832,
      "cr10k": "00:17:12",
      "cr10k_s": 1032,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:48:02",
      "tempo_total_s": 2882,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Matheus Alves",
      "academia": "BT NS",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": "00:00:18",
      "ftp_final_s": 18,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:16:52",
      "cr10k_s": 1012,
      "ld30k": "00:52:13",
      "ld30k_s": 3133,
      "tempo_total": "01:09:23",
      "tempo_total_s": 4163,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Hívila Moreira",
      "academia": "PULSE",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:14",
      "ftp_final_s": 14,
      "montanha": "00:28:02",
      "montanha_s": 1682,
      "cr10k": "00:16:50",
      "cr10k_s": 1010,
      "ld30k": "00:52:39",
      "ld30k_s": 3159,
      "tempo_total": "01:37:45",
      "tempo_total_s": 5865,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Sivonaldo Tercio",
      "academia": "AABB",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:22:30",
      "montanha_s": 1350,
      "cr10k": "00:13:52",
      "cr10k_s": 832,
      "ld30k": "00:42:34",
      "ld30k_s": 2554,
      "tempo_total": "01:18:56",
      "tempo_total_s": 4736,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Camila Mota",
      "academia": "AABB",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:14",
      "ftp_final_s": 14,
      "montanha": "00:28:39",
      "montanha_s": 1719,
      "cr10k": "00:16:57",
      "cr10k_s": 1017,
      "ld30k": "00:52:47",
      "ld30k_s": 3167,
      "tempo_total": "01:38:37",
      "tempo_total_s": 5917,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Isadora Meybel",
      "academia": "BT NS",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": "00:29:28",
      "montanha_s": 1768,
      "cr10k": "00:16:47",
      "cr10k_s": 1007,
      "ld30k": "00:52:51",
      "ld30k_s": 3171,
      "tempo_total": "01:39:17",
      "tempo_total_s": 5957,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Beatriz Bezerra",
      "academia": "BT NS",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:13",
      "ftp_final_s": 13,
      "montanha": "00:28:49",
      "montanha_s": 1729,
      "cr10k": "00:17:21",
      "cr10k_s": 1041,
      "ld30k": "00:52:56",
      "ld30k_s": 3176,
      "tempo_total": "01:39:19",
      "tempo_total_s": 5959,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Duduzinho",
      "academia": "BT TIROL",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": "00:00:16",
      "ftp_final_s": 16,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:19:23",
      "cr10k_s": 1163,
      "ld30k": "01:01:48",
      "ld30k_s": 3708,
      "tempo_total": "01:21:27",
      "tempo_total_s": 4887,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Danilo Vale",
      "academia": "BT TIROL",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:23:55",
      "montanha_s": 1435,
      "cr10k": "00:14:03",
      "cr10k_s": 843,
      "ld30k": "00:44:28",
      "ld30k_s": 2668,
      "tempo_total": "01:22:26",
      "tempo_total_s": 4946,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Ana P. Mendes",
      "academia": "BT TIROL",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": "00:00:14",
      "ftp_final_s": 14,
      "montanha": "00:28:43",
      "montanha_s": 1723,
      "cr10k": "00:16:56",
      "cr10k_s": 1016,
      "ld30k": "00:53:29",
      "ld30k_s": 3209,
      "tempo_total": "01:39:22",
      "tempo_total_s": 5962,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Allyne França",
      "academia": "AABB",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:12",
      "ftp_final_s": 12,
      "montanha": "00:29:15",
      "montanha_s": 1755,
      "cr10k": "00:16:54",
      "cr10k_s": 1014,
      "ld30k": "00:53:07",
      "ld30k_s": 3187,
      "tempo_total": "01:39:28",
      "tempo_total_s": 5968,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Louise Smith",
      "academia": "BT NS",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:16:26",
      "cr10k_s": 986,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:16:26",
      "tempo_total_s": 986,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Luerber Oscar",
      "academia": "PULSE",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:15",
      "ftp_final_s": 15,
      "montanha": "00:25:34",
      "montanha_s": 1534,
      "cr10k": "00:15:24",
      "cr10k_s": 924,
      "ld30k": "00:48:12",
      "ld30k_s": 2892,
      "tempo_total": "01:29:25",
      "tempo_total_s": 5365,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Lívia Revoredo",
      "academia": "BT NS",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:26:47",
      "montanha_s": 1607,
      "cr10k": "00:16:30",
      "cr10k_s": 990,
      "ld30k": "00:49:22",
      "ld30k_s": 2962,
      "tempo_total": "01:32:39",
      "tempo_total_s": 5559,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Giuly Giardinni",
      "academia": "AABB",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:42",
      "ftp_final_s": 42,
      "montanha": "00:28:07",
      "montanha_s": 1687,
      "cr10k": "00:16:33",
      "cr10k_s": 993,
      "ld30k": "00:54:40",
      "ld30k_s": 3280,
      "tempo_total": "01:40:02",
      "tempo_total_s": 6002,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Socorro Linhares",
      "academia": "BT NS",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": "00:00:14",
      "ftp_final_s": 14,
      "montanha": "00:29:17",
      "montanha_s": 1757,
      "cr10k": "00:18:15",
      "cr10k_s": 1095,
      "ld30k": "00:52:42",
      "ld30k_s": 3162,
      "tempo_total": "01:40:28",
      "tempo_total_s": 6028,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Ana Azevedo",
      "academia": "PULSE",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:10",
      "ftp_final_s": 10,
      "montanha": "00:28:44",
      "montanha_s": 1724,
      "cr10k": "00:18:21",
      "cr10k_s": 1101,
      "ld30k": "00:53:20",
      "ld30k_s": 3200,
      "tempo_total": "01:40:35",
      "tempo_total_s": 6035,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Arthur Dantas",
      "academia": "PULSE",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:10",
      "ftp_final_s": 10,
      "montanha": "00:24:42",
      "montanha_s": 1482,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:24:52",
      "tempo_total_s": 1492,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Luciana Maria",
      "academia": "AABB",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": "00:00:19",
      "ftp_final_s": 19,
      "montanha": "00:28:31",
      "montanha_s": 1711,
      "cr10k": "00:17:19",
      "cr10k_s": 1039,
      "ld30k": "00:54:27",
      "ld30k_s": 3267,
      "tempo_total": "01:40:36",
      "tempo_total_s": 6036,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Raissa Georgia",
      "academia": "BT TIROL",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:26:57",
      "montanha_s": 1617,
      "cr10k": "00:16:38",
      "cr10k_s": 998,
      "ld30k": "00:50:44",
      "ld30k_s": 3044,
      "tempo_total": "01:34:19",
      "tempo_total_s": 5659,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Isabel Lucena",
      "academia": "BT TIROL",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:30:05",
      "montanha_s": 1805,
      "cr10k": "00:18:23",
      "cr10k_s": 1103,
      "ld30k": "00:56:34",
      "ld30k_s": 3394,
      "tempo_total": "01:45:02",
      "tempo_total_s": 6302,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Júlia Rocha",
      "academia": "PULSE",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": "00:00:10",
      "ftp_final_s": 10,
      "montanha": "00:28:40",
      "montanha_s": 1720,
      "cr10k": "00:17:44",
      "cr10k_s": 1064,
      "ld30k": "00:54:17",
      "ld30k_s": 3257,
      "tempo_total": "01:40:51",
      "tempo_total_s": 6051,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Laura Negreiros",
      "academia": "AABB",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": "00:00:20",
      "ftp_final_s": 20,
      "montanha": "00:29:43",
      "montanha_s": 1783,
      "cr10k": "00:18:07",
      "cr10k_s": 1087,
      "ld30k": "00:53:19",
      "ld30k_s": 3199,
      "tempo_total": "01:41:29",
      "tempo_total_s": 6089,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "JESSICA",
      "academia": "BT NS",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": "00:00:20",
      "ftp_final_s": 20,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:18:28",
      "cr10k_s": 1108,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:18:48",
      "tempo_total_s": 1128,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Alê Agra",
      "academia": "PULSE",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:29:28",
      "montanha_s": 1768,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:29:28",
      "tempo_total_s": 1768,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Chiyo da Silva",
      "academia": "AABB",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": "00:00:13",
      "ftp_final_s": 13,
      "montanha": "00:30:50",
      "montanha_s": 1850,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:56:50",
      "ld30k_s": 3410,
      "tempo_total": "01:27:53",
      "tempo_total_s": 5273,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Arthur Martins",
      "academia": "BT NS",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:23:29",
      "montanha_s": 1409,
      "cr10k": "00:14:29",
      "cr10k_s": 869,
      "ld30k": "00:44:34",
      "ld30k_s": 2674,
      "tempo_total": "01:22:32",
      "tempo_total_s": 4952,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Samara Silva",
      "academia": "BT NS",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:30:54",
      "montanha_s": 1854,
      "cr10k": "00:19:26",
      "cr10k_s": 1166,
      "ld30k": "01:00:28",
      "ld30k_s": 3628,
      "tempo_total": "01:50:48",
      "tempo_total_s": 6648,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Daniel Azevedo",
      "academia": "BT NS",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:25:42",
      "montanha_s": 1542,
      "cr10k": "00:14:26",
      "cr10k_s": 866,
      "ld30k": "00:44:27",
      "ld30k_s": 2667,
      "tempo_total": "01:24:35",
      "tempo_total_s": 5075,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Katia Cunha",
      "academia": "PULSE",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": "00:00:16",
      "ftp_final_s": 16,
      "montanha": "00:28:03",
      "montanha_s": 1683,
      "cr10k": "00:18:03",
      "cr10k_s": 1083,
      "ld30k": "00:55:30",
      "ld30k_s": 3330,
      "tempo_total": "01:41:52",
      "tempo_total_s": 6112,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Elistenio Pai",
      "academia": "BT TIROL",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:19",
      "ftp_final_s": 19,
      "montanha": "00:26:42",
      "montanha_s": 1602,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:27:01",
      "tempo_total_s": 1621,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Alberto",
      "academia": "PULSE",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": "00:00:18",
      "ftp_final_s": 18,
      "montanha": "00:25:17",
      "montanha_s": 1517,
      "cr10k": "00:15:43",
      "cr10k_s": 943,
      "ld30k": "00:48:24",
      "ld30k_s": 2904,
      "tempo_total": "01:29:42",
      "tempo_total_s": 5382,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Haroldo Duarte",
      "academia": "AABB",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:25:11",
      "montanha_s": 1511,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:47:58",
      "ld30k_s": 2878,
      "tempo_total": "01:13:09",
      "tempo_total_s": 4389,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Joao Pedro",
      "academia": "BT NS",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:25:02",
      "montanha_s": 1502,
      "cr10k": "00:15:12",
      "cr10k_s": 912,
      "ld30k": "00:45:06",
      "ld30k_s": 2706,
      "tempo_total": "01:25:20",
      "tempo_total_s": 5120,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Carol Negreiros",
      "academia": "PULSE",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": "00:00:22",
      "ftp_final_s": 22,
      "montanha": "00:32:27",
      "montanha_s": 1947,
      "cr10k": "00:19:43",
      "cr10k_s": 1183,
      "ld30k": "01:07:11",
      "ld30k_s": 4031,
      "tempo_total": "01:59:43",
      "tempo_total_s": 7183,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Artur Sena",
      "academia": "BT NS",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": "00:00:22",
      "ftp_final_s": 22,
      "montanha": "00:28:04",
      "montanha_s": 1684,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:28:26",
      "tempo_total_s": 1706,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Livia Darc",
      "academia": "BT NS",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": "00:00:15",
      "ftp_final_s": 15,
      "montanha": "00:29:19",
      "montanha_s": 1759,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:51:51",
      "ld30k_s": 3111,
      "tempo_total": "01:21:25",
      "tempo_total_s": 4885,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Rafael Povoas",
      "academia": "PULSE",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:24:43",
      "montanha_s": 1483,
      "cr10k": "00:15:05",
      "cr10k_s": 905,
      "ld30k": "00:45:56",
      "ld30k_s": 2756,
      "tempo_total": "01:25:44",
      "tempo_total_s": 5144,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "João Menezes",
      "academia": "AABB",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": "00:25:52",
      "montanha_s": 1552,
      "cr10k": "00:15:46",
      "cr10k_s": 946,
      "ld30k": "00:48:58",
      "ld30k_s": 2938,
      "tempo_total": "01:30:47",
      "tempo_total_s": 5447,
      "provas": 4,
      "ranking_tempo": true
    },
    {
      "nome": "Igor Rosado",
      "academia": "BT TIROL",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:28:19",
      "montanha_s": 1699,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:28:19",
      "tempo_total_s": 1699,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Gringo",
      "academia": "BT NS",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:13",
      "ftp_final_s": 13,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:15:38",
      "cr10k_s": 938,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:15:51",
      "tempo_total_s": 951,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "César Britto",
      "academia": "AABB",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:25:20",
      "montanha_s": 1520,
      "cr10k": "00:15:11",
      "cr10k_s": 911,
      "ld30k": "00:47:06",
      "ld30k_s": 2826,
      "tempo_total": "01:27:37",
      "tempo_total_s": 5257,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Gisele",
      "academia": "PULSE",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:17",
      "ftp_final_s": 17,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:17:42",
      "cr10k_s": 1062,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:17:59",
      "tempo_total_s": 1079,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Armando Nóbrega",
      "academia": "AABB",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": "00:00:15",
      "ftp_final_s": 15,
      "montanha": null,
      "montanha_s": null,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:49:22",
      "ld30k_s": 2962,
      "tempo_total": "00:49:37",
      "tempo_total_s": 2977,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Bira Carratu",
      "academia": "AABB",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": "00:23:39",
      "montanha_s": 1419,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:23:50",
      "tempo_total_s": 1430,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Daniel Freire",
      "academia": "PULSE",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:25:09",
      "montanha_s": 1509,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:25:09",
      "tempo_total_s": 1509,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Oona Lopes",
      "academia": "AABB",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:14",
      "ftp_final_s": 14,
      "montanha": null,
      "montanha_s": null,
      "cr10k": "00:19:58",
      "cr10k_s": 1198,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:20:12",
      "tempo_total_s": 1212,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Heloisa Lopes",
      "academia": "BT TIROL",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:09",
      "ftp_final_s": 9,
      "montanha": null,
      "montanha_s": null,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:53:42",
      "ld30k_s": 3222,
      "tempo_total": "00:53:51",
      "tempo_total_s": 3231,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Alini Brito",
      "academia": "BT NS",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:10",
      "ftp_final_s": 10,
      "montanha": "00:26:18",
      "montanha_s": 1578,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:48:31",
      "ld30k_s": 2911,
      "tempo_total": "01:14:59",
      "tempo_total_s": 4499,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Diogo Almeida",
      "academia": "PULSE",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:05",
      "ftp_final_s": 5,
      "montanha": "00:24:09",
      "montanha_s": 1449,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:24:14",
      "tempo_total_s": 1454,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Rogério Dantas",
      "academia": "BT NS",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": "00:00:17",
      "ftp_final_s": 17,
      "montanha": "00:28:21",
      "montanha_s": 1701,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:28:38",
      "tempo_total_s": 1718,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Luiz César",
      "academia": "AABB",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": "00:00:23",
      "ftp_final_s": 23,
      "montanha": null,
      "montanha_s": null,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:00:23",
      "tempo_total_s": 23,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "GERUSIA",
      "academia": "BT NS",
      "equipe": "MASTER",
      "categoria": "Feminino",
      "ftp_final": "00:00:21",
      "ftp_final_s": 21,
      "montanha": null,
      "montanha_s": null,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:53:40",
      "ld30k_s": 3220,
      "tempo_total": "00:54:01",
      "tempo_total_s": 3241,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Cris Diniz",
      "academia": "PULSE",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:25:22",
      "montanha_s": 1522,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:46:45",
      "ld30k_s": 2805,
      "tempo_total": "01:12:07",
      "tempo_total_s": 4327,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "EDUARDO",
      "academia": "BT TIROL",
      "equipe": "ELITE MASCULINO",
      "categoria": "Masculino",
      "ftp_final": "00:00:17",
      "ftp_final_s": 17,
      "montanha": null,
      "montanha_s": null,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:00:17",
      "tempo_total_s": 17,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Jannaina Queiroz",
      "academia": "BT TIROL",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:11",
      "ftp_final_s": 11,
      "montanha": null,
      "montanha_s": null,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:00:11",
      "tempo_total_s": 11,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Allan Oliveira",
      "academia": "AABB",
      "equipe": "SUB-26",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:27:41",
      "montanha_s": 1661,
      "cr10k": "00:17:04",
      "cr10k_s": 1024,
      "ld30k": "00:52:17",
      "ld30k_s": 3137,
      "tempo_total": "01:37:02",
      "tempo_total_s": 5822,
      "provas": 3,
      "ranking_tempo": false
    },
    {
      "nome": "Luna Melo",
      "academia": "BT TIROL",
      "equipe": "SUB-26",
      "categoria": "Feminino",
      "ftp_final": "00:00:17",
      "ftp_final_s": 17,
      "montanha": "00:31:36",
      "montanha_s": 1896,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:31:53",
      "tempo_total_s": 1913,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Kleber Gentil",
      "academia": "BT NS",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:26:13",
      "montanha_s": 1573,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:53:13",
      "ld30k_s": 3193,
      "tempo_total": "01:19:26",
      "tempo_total_s": 4766,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Renata Ivia",
      "academia": "BT NS",
      "equipe": "PRO FEMININO",
      "categoria": "Feminino",
      "ftp_final": "00:00:15",
      "ftp_final_s": 15,
      "montanha": null,
      "montanha_s": null,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": null,
      "ld30k_s": null,
      "tempo_total": "00:00:15",
      "tempo_total_s": 15,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Luiz Marcelo",
      "academia": "PULSE",
      "equipe": "PRO MASCULINO",
      "categoria": "Masculino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": null,
      "montanha_s": null,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:48:29",
      "ld30k_s": 2909,
      "tempo_total": "00:48:29",
      "tempo_total_s": 2909,
      "provas": 1,
      "ranking_tempo": false
    },
    {
      "nome": "Lydia Tinôco",
      "academia": "AABB",
      "equipe": "ELITE FEMININO",
      "categoria": "Feminino",
      "ftp_final": null,
      "ftp_final_s": null,
      "montanha": "00:28:16",
      "montanha_s": 1696,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:53:31",
      "ld30k_s": 3211,
      "tempo_total": "01:21:47",
      "tempo_total_s": 4907,
      "provas": 2,
      "ranking_tempo": false
    },
    {
      "nome": "Wilson Chacon",
      "academia": "BT TIROL",
      "equipe": "MASTER",
      "categoria": "Masculino",
      "ftp_final": "00:00:17",
      "ftp_final_s": 17,
      "montanha": null,
      "montanha_s": null,
      "cr10k": null,
      "cr10k_s": null,
      "ld30k": "00:49:00",
      "ld30k_s": 2940,
      "tempo_total": "00:49:17",
      "tempo_total_s": 2957,
      "provas": 2,
      "ranking_tempo": false
    }
  ]
};
