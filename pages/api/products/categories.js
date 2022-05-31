import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['BestSeller','Juices', 'Shakes','Season Special', 'Icecreams'];
  res.send(categories);
});

export default handler;
