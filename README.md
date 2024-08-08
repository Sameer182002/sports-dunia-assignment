
# Sports Dunia Assignment

It contains two folders one for frontend and one for Backend.



## API Reference

#### Get all items

```http
  GET /live-scores
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Optional**. Search filter |

#### Get item

```http
  POST /live-scores
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `teamName`      | `string` | **Required**. Name OF Team |
| `score`      | `number` | **Required**. Score OF Team |
| `match`      | `string` | **Required**. Name Of Match|
| `scoreType`      | `string` | **Required**. Type of Sports |




## How To Run

- Clone the Repo
#### navigate to Front-end folder
- install all dependencies
- npm run dev

#### (add new terminal)
#### navigate to Back-end folder
- install all dependencies
- npm run dev (Server will be listening on 3001)

