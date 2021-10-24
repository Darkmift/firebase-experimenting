import getUsers from './firebase.mjs'

async function main() {
  try {
    const users = await getUsers()
    console.log("🚀 ~ file: index.mjs ~ line 6 ~ main ~ users", users.map(doc => doc.data()))
  } catch (error) {
    console.log("🚀 ~ file: index.mjs ~ line 8 ~ main ~ error", error)
  }
}

main()
