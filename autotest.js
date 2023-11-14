{
	"info": {
		"_postman_id": "8cc06bd3-3599-4d30-825f-8cdaa0ccd2fa",
		"name": "Kinopoisk",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "29572018"
	},
	"item": [
		{
			"name": "Получение информации о фильме",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"",
							"pm.test(\"Ожидаем название фильма на русском Оппенгеймер\", function () {",
							"    var jsonData = pm.response.json();",
							"    pm.expect(jsonData.nameRu).to.eql(\"Оппенгеймер\");",
							"});",
							"",
							"pm.test(\"Ожидаем название второй страны - Великобритания\", function () {",
							"    var jsonData = pm.response.json();",
							"    pm.expect(jsonData.countries[1].country).to.eql(\"Великобритания\");",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disabledSystemHeaders": {
					"accept": true
				}
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "X-API-KEY",
						"value": "94b7a7dc-9e8b-4cc5-bdc1-01b3be930f83",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://kinopoiskapiunofficial.tech/api/v2.2/films/4664634",
					"protocol": "https",
					"host": [
						"kinopoiskapiunofficial",
						"tech"
					],
					"path": [
						"api",
						"v2.2",
						"films",
						"4664634"
					]
				}
			},
			"response": []
		},
		{
			"name": "Получение фактов о фильме",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"",
							"pm.test(\"Ожидаем первый факт о фильме о плёночных кинокамерах IMAX\", function () {",
							"    var jsonData = pm.response.json();",
							"    pm.expect(jsonData.items[0].text).to.eql(\"Для съёмок впервые в плёночных кинокамерах IMAX была использована чёрно-белая плёнка.\");",
							"});",
							"",
							"pm.test(\"Ожидаю, что ответ придёт быстрее 200ms\", function () {pm.expect(pm.response.responseTime).to.be.below(200);})"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disabledSystemHeaders": {
					"accept": true
				}
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "X-API-KEY",
						"value": "94b7a7dc-9e8b-4cc5-bdc1-01b3be930f83",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://kinopoiskapiunofficial.tech/api/v2.2/films/4664634/facts",
					"protocol": "https",
					"host": [
						"kinopoiskapiunofficial",
						"tech"
					],
					"path": [
						"api",
						"v2.2",
						"films",
						"4664634",
						"facts"
					]
				}
			},
			"response": []
		},
		{
			"name": "Получение данных о прокате фильма",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"",
							"pm.test(\"Ожидаем дату выхода фильма в Исландии\", function () {",
							"    var jsonData = pm.response.json();",
							"    pm.expect(jsonData.items[0].date).to.eql(\"2023-07-19\");",
							"});",
							"",
							"pm.test(\"Content-Type is present\", function () {",
							"    pm.response.to.have.header(\"Content-Type\");",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disabledSystemHeaders": {
					"accept": true
				}
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "X-API-KEY",
						"value": "94b7a7dc-9e8b-4cc5-bdc1-01b3be930f83",
						"type": "text"
					},
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://kinopoiskapiunofficial.tech/api/v2.2/films/4664634/distributions",
					"protocol": "https",
					"host": [
						"kinopoiskapiunofficial",
						"tech"
					],
					"path": [
						"api",
						"v2.2",
						"films",
						"4664634",
						"distributions"
					]
				}
			},
			"response": []
		},
		{
			"name": "Получение данных о бюджете и сборах фильма",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"",
							"pm.test(\"Ожидаю бюджет фильма в США\", function () {",
							"    var jsonData = pm.response.json();",
							"    pm.expect(jsonData.items[1].amount).to.eql(321731175);",
							"});",
							"",
							"pm.test(\"Ожидаю бюджет фильма в мире\", function () {",
							"    var jsonData = pm.response.json();",
							"    pm.expect(jsonData.items[2].amount).to.eql(928300425);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disabledSystemHeaders": {
					"accept": true
				}
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "X-API-KEY",
						"value": "94b7a7dc-9e8b-4cc5-bdc1-01b3be930f83",
						"type": "text"
					},
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://kinopoiskapiunofficial.tech/api/v2.2/films/4664634/box_office",
					"protocol": "https",
					"host": [
						"kinopoiskapiunofficial",
						"tech"
					],
					"path": [
						"api",
						"v2.2",
						"films",
						"4664634",
						"box_office"
					]
				}
			},
			"response": []
		},
		{
			"name": "Получение данных о наградах фильма",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"",
							"pm.test(\"Ожидаю, что ответ придёт быстрее 200ms\", function () {pm.expect(pm.response.responseTime).to.be.below(200);})",
							"",
							"pm.test(\"Body is correct\", function () {",
							"    var jsonData = pm.response.json();",
							"    pm.expect(jsonData).to.have.all.keys(\"total\",\"items\");",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disabledSystemHeaders": {
					"accept": true
				}
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "X-API-KEY",
						"value": "94b7a7dc-9e8b-4cc5-bdc1-01b3be930f83",
						"type": "text"
					},
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://kinopoiskapiunofficial.tech/api/v2.2/films/4664634/awards",
					"protocol": "https",
					"host": [
						"kinopoiskapiunofficial",
						"tech"
					],
					"path": [
						"api",
						"v2.2",
						"films",
						"4664634",
						"awards"
					]
				}
			},
			"response": []
		}
	]
}