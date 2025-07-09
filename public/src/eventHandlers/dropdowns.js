export const toggleDropdown = (dropdownId) => {
    closeDropdowns()
    const dropdownElement = document.getElementById(dropdownId)
    dropdownElement.classList.toggle('show')
}

export const closeDropdowns = () => {
    document.querySelectorAll('.dropdown-content').forEach((element) => element.classList.remove('show'))
}