const a = {
  priceId: [
    {
      $oid: "648ab7d1a8cbb031b81b78f0",
      nama: "Rafi",
    },
    {
      $oid: "648ab7f1a8cbb031b81b78f4",
      nama: "Eva",
    },
    {
      $oid: "648ab7f1a8cbb031b81b78f4",
      nama: "Eva",
    },
    {
      $oid: "648ab7f1a8cbb031b81b78f4",
      nama: "Eva",
    },
    {
      $oid: "648ab7f1a8cbb031b81b78f4",
      nama: "Eva",
    },
    {
      $oid: "648ab7f1a8cbb031b81b78f4",
      nama: "Eva",
    },
  ],
};
const iterasi = 5;

for (let i = 0; i < iterasi; i++) {
  console.log(`Iterasi ${a.priceId[i].nama} ke-${i + 1}`);
}
