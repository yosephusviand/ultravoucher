function groupAnagrams(words) {
    const anagramGroups = {};

    function sortString(str) {
        return str.split('').sort().join('');
    }

    for (const word of words) {
        const sortedWord = sortString(word);

        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }

        anagramGroups[sortedWord].push(word);
    }

    const result = Object.values(anagramGroups);
    return result;
}

const data = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const groupsAnagrams = groupAnagrams(data);

console.log(groupsAnagrams);
