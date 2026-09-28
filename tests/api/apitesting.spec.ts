import{test, expect, request} from "@playwright/test"

test("api testing", async({request})=>{

    // get
const response = await request.get("https://reqres.in/api/users?page=2") 

console.log(await response.json())

expect(response.status()).toBe(200)

})
// post
test.only("post api", async({request})=>{

const postresp = await request.post("https://reqres.in/api/users",
    {data:{"name":"bana", "designation":"software eng"}}
)

console.log(await postresp.json())

expect(await postresp.status()).toBe(201)
var respid = await postresp.json()
const uid = respid.id
console.log(uid)

// put
const putapi = await request.put(`https://reqres.in/api/users/${uid}`, {data:{"name":"test","designation":"test eng"}})
console.log(await putapi.json())
 expect(await putapi.status()).toBe(200)

// delete
const delresp = await request.delete(`https://reqres.in/api/users/${uid}`)

//console.log(await delresp.json())

expect (await delresp.status()).toBe(204)


})
// put
test.skip("put api", async({request})=>{

await request.put("https://reqres.in/api/users/")




})