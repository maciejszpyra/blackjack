var WHITE_ICON =
  "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg";
var BLACK_ICON =
  "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg";

// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch

// const boardID = await t.board('id')

// const response = await fetch(`https://api.trello.com/1/boards/{id}/lists?key=${API_KEY}&token=${API_TOKEN}`, {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json'
//   }
// })

// const data = await response.text();
// console.log(data);

window.TrelloPowerUp.initialize({
  "board-buttons": function (t, opts) {
    return t.lists("all").then(function (lists) {
      // console.log(JSON.stringify(lists, null, 2));
      const data = lists.map((list) => `${list.name} [${list.cards.length}]`);
      const buttonLabel = data.join(' ');
      return [{
        // we can either provide a button that has a callback function
        icon: {
          dark: WHITE_ICON,
          light: BLACK_ICON
        },
        text: buttonLabel,
        // callback: () =>{},
        // condition: 'edit'
      }];
    });

  },
});
