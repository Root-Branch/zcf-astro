export function formatDate(dateString, format = 'MM/DD/YY') {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    
    // Return empty string if date is invalid
    if (isNaN(date.getTime())) return dateString;
    
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit'
    });
  } catch (error) {
    return dateString;
  }
} 