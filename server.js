const express = require('express');
const app = express();
const superagent = require('superagent');

app.get('/api/callapi',(req,res)=>{
    superagent.get('https://books.zoho.com/api/v3/organizations')
    .query({organization_id: '649249007', authtoken: 'db36e02a50b57e081efe533a8a0f834b' })
    .end((err, data) => {
    if (err) { return console.log(err); }
    var fnldata=JSON.parse(data.text);
    
    let result = fnldata.organizations.map(api=>{
      return {
                      
          'name' : api.name,
          'contact_name' : api.contact_name,
          'email' : api.email,
          'country' : api.country,
          'country_code' : api.country_code,
            }
        });
     res.json(result);

  });
})

const port = 5000;
app.listen(port, () => `Server running on port ${port}`);