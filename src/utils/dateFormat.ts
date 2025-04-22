export function formatDate(dateString, format = 'MM/DD/YY') {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) return dateString;
    
    return date.toLocaleDateString('en-GB', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit'
    });
  } catch (error) {
    return dateString;
  }
} 