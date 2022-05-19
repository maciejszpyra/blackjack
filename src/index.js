const ICON = "https://cdn-icons-png.flaticon.com/512/1983/1983632.png";
const FIRST_POSITION_MAGIC = 65535;

window.TrelloPowerUp.initialize({
  "board-buttons": function (t, opts) {
    return t.lists("all").then(function (lists) {
      const data = lists.map((list) => `${list.name} [${list.cards.length}]`);
      const buttonLabel = data.join(" ");
      return [
        {
          icon: {
            dark: ICON,
            light: ICON,
          },
          text: buttonLabel,
        },
      ];
    });
  },
  "card-badges": function (t, opts) {
    return t.card("id").then(function ({ id }) {
      t.list("cards").then(function (cards) {
        const firstCardId = cards[0].id;
        // const data = lists.map((list) => `${list.name} [${list.cards.length}]`);
        // const buttonLabel = data.join(" ");
        if (id === firstCardId) {
          return [
            {
              dynamic: function () {
                return {
                  text:
                    "Dynamic " + (Math.random() * 100).toFixed(0).toString(),
                  icon: "./images/icon.svg",
                  color: "green",
                  refresh: 10,
                };
              },
            },
          ];
        }
      });
    });
  },
});
