'use server'

export async function shareMealSubmit(formData) {
  const data = Object.fromEntries(formData.entries())
  console.log('Form Data:', data)
}