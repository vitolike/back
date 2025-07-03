export default {
  "openapi": "3.0.0",
  "info": {
    "title": "Casino API",
    "version": "1.0.0",
    "description": "Documenta\u00e7\u00e3o da API do cassino"
  },
  "paths": {
    "/users": {
      "get": {
        "summary": "Listar todos os users",
        "responses": {
          "200": {
            "description": "Lista de users",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo user",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "User criado"
          }
        }
      }
    },
    "/users/{id}": {
      "get": {
        "summary": "Buscar user por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do user"
          },
          "404": {
            "description": "User n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar user por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "User atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover user por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "User removido"
          }
        }
      }
    },
    "/providers": {
      "get": {
        "summary": "Listar todos os providers",
        "responses": {
          "200": {
            "description": "Lista de providers",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo provider",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Provider criado"
          }
        }
      }
    },
    "/providers/{id}": {
      "get": {
        "summary": "Buscar provider por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do provider"
          },
          "404": {
            "description": "Provider n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar provider por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Provider atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover provider por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Provider removido"
          }
        }
      }
    },
    "/games": {
      "get": {
        "summary": "Listar todos os games",
        "responses": {
          "200": {
            "description": "Lista de games",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo game",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Game criado"
          }
        }
      }
    },
    "/games/{id}": {
      "get": {
        "summary": "Buscar game por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do game"
          },
          "404": {
            "description": "Game n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar game por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Game atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover game por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Game removido"
          }
        }
      }
    },
    "/wallets": {
      "get": {
        "summary": "Listar todos os wallets",
        "responses": {
          "200": {
            "description": "Lista de wallets",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo wallet",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Wallet criado"
          }
        }
      }
    },
    "/wallets/{id}": {
      "get": {
        "summary": "Buscar wallet por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do wallet"
          },
          "404": {
            "description": "Wallet n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar wallet por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Wallet atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover wallet por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Wallet removido"
          }
        }
      }
    },
    "/wallet_history": {
      "get": {
        "summary": "Listar todos os wallet_history",
        "responses": {
          "200": {
            "description": "Lista de wallet_history",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo wallet_history",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Wallet_history criado"
          }
        }
      }
    },
    "/wallet_history/{id}": {
      "get": {
        "summary": "Buscar wallet_history por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do wallet_history"
          },
          "404": {
            "description": "Wallet_history n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar wallet_history por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Wallet_history atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover wallet_history por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Wallet_history removido"
          }
        }
      }
    },
    "/transactions": {
      "get": {
        "summary": "Listar todos os transactions",
        "responses": {
          "200": {
            "description": "Lista de transactions",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo transaction",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Transaction criado"
          }
        }
      }
    },
    "/transactions/{id}": {
      "get": {
        "summary": "Buscar transaction por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do transaction"
          },
          "404": {
            "description": "Transaction n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar transaction por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Transaction atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover transaction por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Transaction removido"
          }
        }
      }
    },
    "/bets": {
      "get": {
        "summary": "Listar todos os bets",
        "responses": {
          "200": {
            "description": "Lista de bets",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo bet",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Bet criado"
          }
        }
      }
    },
    "/bets/{id}": {
      "get": {
        "summary": "Buscar bet por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do bet"
          },
          "404": {
            "description": "Bet n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar bet por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Bet atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover bet por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Bet removido"
          }
        }
      }
    },
    "/game_rounds": {
      "get": {
        "summary": "Listar todos os game_rounds",
        "responses": {
          "200": {
            "description": "Lista de game_rounds",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo game_round",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Game_round criado"
          }
        }
      }
    },
    "/game_rounds/{id}": {
      "get": {
        "summary": "Buscar game_round por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do game_round"
          },
          "404": {
            "description": "Game_round n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar game_round por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Game_round atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover game_round por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Game_round removido"
          }
        }
      }
    },
    "/bonuses": {
      "get": {
        "summary": "Listar todos os bonuses",
        "responses": {
          "200": {
            "description": "Lista de bonuses",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo bonuse",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Bonuse criado"
          }
        }
      }
    },
    "/bonuses/{id}": {
      "get": {
        "summary": "Buscar bonuse por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do bonuse"
          },
          "404": {
            "description": "Bonuse n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar bonuse por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Bonuse atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover bonuse por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Bonuse removido"
          }
        }
      }
    },
    "/user_bonuses": {
      "get": {
        "summary": "Listar todos os user_bonuses",
        "responses": {
          "200": {
            "description": "Lista de user_bonuses",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo user_bonuse",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "User_bonuse criado"
          }
        }
      }
    },
    "/user_bonuses/{id}": {
      "get": {
        "summary": "Buscar user_bonuse por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do user_bonuse"
          },
          "404": {
            "description": "User_bonuse n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar user_bonuse por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "User_bonuse atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover user_bonuse por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "User_bonuse removido"
          }
        }
      }
    },
    "/event_logs": {
      "get": {
        "summary": "Listar todos os event_logs",
        "responses": {
          "200": {
            "description": "Lista de event_logs",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo event_log",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Event_log criado"
          }
        }
      }
    },
    "/event_logs/{id}": {
      "get": {
        "summary": "Buscar event_log por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do event_log"
          },
          "404": {
            "description": "Event_log n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar event_log por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Event_log atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover event_log por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Event_log removido"
          }
        }
      }
    },
    "/sessions": {
      "get": {
        "summary": "Listar todos os sessions",
        "responses": {
          "200": {
            "description": "Lista de sessions",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo session",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Session criado"
          }
        }
      }
    },
    "/sessions/{id}": {
      "get": {
        "summary": "Buscar session por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do session"
          },
          "404": {
            "description": "Session n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar session por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Session atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover session por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Session removido"
          }
        }
      }
    },
    "/admins": {
      "get": {
        "summary": "Listar todos os admins",
        "responses": {
          "200": {
            "description": "Lista de admins",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo admin",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Admin criado"
          }
        }
      }
    },
    "/admins/{id}": {
      "get": {
        "summary": "Buscar admin por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do admin"
          },
          "404": {
            "description": "Admin n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar admin por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Admin atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover admin por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Admin removido"
          }
        }
      }
    },
    "/admin_logs": {
      "get": {
        "summary": "Listar todos os admin_logs",
        "responses": {
          "200": {
            "description": "Lista de admin_logs",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo admin_log",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Admin_log criado"
          }
        }
      }
    },
    "/admin_logs/{id}": {
      "get": {
        "summary": "Buscar admin_log por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do admin_log"
          },
          "404": {
            "description": "Admin_log n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar admin_log por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Admin_log atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover admin_log por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Admin_log removido"
          }
        }
      }
    },
    "/user_blocks": {
      "get": {
        "summary": "Listar todos os user_blocks",
        "responses": {
          "200": {
            "description": "Lista de user_blocks",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo user_block",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "User_block criado"
          }
        }
      }
    },
    "/user_blocks/{id}": {
      "get": {
        "summary": "Buscar user_block por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do user_block"
          },
          "404": {
            "description": "User_block n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar user_block por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "User_block atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover user_block por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "User_block removido"
          }
        }
      }
    },
    "/affiliates": {
      "get": {
        "summary": "Listar todos os affiliates",
        "responses": {
          "200": {
            "description": "Lista de affiliates",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Criar novo affiliate",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Affiliate criado"
          }
        }
      }
    },
    "/affiliates/{id}": {
      "get": {
        "summary": "Buscar affiliate por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Dados do affiliate"
          },
          "404": {
            "description": "Affiliate n\u00e3o encontrado"
          }
        }
      },
      "put": {
        "summary": "Atualizar affiliate por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Affiliate atualizado"
          }
        }
      },
      "delete": {
        "summary": "Remover affiliate por ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Affiliate removido"
          }
        }
      }
    }
  }
}