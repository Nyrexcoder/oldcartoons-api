export default async function handler(req, res) {
  const data = {
    ben10classics01e01:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/ZmwYiIJXXMjmKhP" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e02:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/YiDoYr0kEStqz2w" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e03:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/XZbCUWlja3f2nMd" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e04:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/ja7sKGv0PRivDfw" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e05:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/1iW87FFkLN9UBU3" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e06:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/VxwfVKM15DT3Wk8" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e07:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/4hS464TOEgXfcma" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e08:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/fCTp4RVjKQ6YvEE" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e09:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/3cbDMvYKe59sph8" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e10:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/nOkaYEOZkd9kckP" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e011:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/ogMwsPIT1W7IV7u" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e012:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/2R9fNc9ff6AcKFH" frameborder="0" allowfullscreen="true"></iframe>',
    ben10classics01e013:
      '<iframe class="responsive-iframe" width="100%" height="100%" src="https://multiquality.xyz/embed/fQnJUvLaIWZ3bwL" frameborder="0" allowfullscreen="true"></iframe>',
  };

  if (req.method === "GET") {
    try {
      res.status(200).json({ data });
    } catch (err) {
      res.status(500).json({ err });
    }
  } else {
    res.status(404).json("invalid request");
  }
}
