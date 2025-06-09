import sql from 'better-sqlite3'

const db = new sql('meals.db')

export function getMeals() {
  return new Promise((resolve, reject) => {
    try {
      const stmt = db.prepare('SELECT * FROM meals')
      const meals = stmt.all()
      setTimeout(() => {
        resolve(meals)
      }, 2000)
    } catch (error) {
      reject([])
    }
  })
}

export async function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}
