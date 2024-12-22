function insertionSort(arr) {
    let n = arr.length; // Longueur du tableau

    for (let i = 1; i < n; i++) {
        let current = arr[i]; // Élément actuel à insérer
        let j = i - 1; // Index de l'élément précédent

        // Déplacer les éléments plus grands que 'current' d'une position vers la droite
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insérer l'élément à sa position correcte
        arr[j + 1] = current;
    }

    return arr; // Retourner le tableau trié
}

// Exemple d'utilisation
let tableau = [5, 2, 9, 1, 5, 6];
console.log("Tableau trié :", insertionSort(tableau));
