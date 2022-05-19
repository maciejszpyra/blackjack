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
});

