<template>
  <div class="hidden"></div>
</template>

<script>
export default {
  props: {
    formId: {
      type: String,
      required: true
    },
    portalId: {
      type: String,
      required: true
    },
    formGuid: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.initHubspotForm(this.formId, this.portalId, this.formGuid);
  },
  methods: {
    initHubspotForm(formId, portalId, formGuid) {
      const form = document.getElementById(formId);
      const formSection = document.getElementById(`${formId}-form-section`);
      const successSection = document.getElementById(`${formId}-success`);
      
      if (form && formSection && successSection) {
        form.addEventListener('submit', async (event) => {
          event.preventDefault();
          
          const formData = new FormData(form);
          const fieldsData = [];
          
          for (const [name, value] of formData.entries()) {
            if (name !== 'portalId' && name !== 'formId') {
              fieldsData.push({
                objectTypeId: "0-1",
                name: name,
                value: value
              });
            }
          }
          
          const context = {
            pageUri: window.location.href,
            pageName: document.title
          };
          
          // Get the HubSpot tracking cookie if available
          const hutk = this.getCookie('hubspotutk');
          if (hutk) {
            context.hutk = hutk;
          }
          
          const payload = {
            fields: fieldsData,
            context: context
          };
          
          try {
            this.toggleSubmitButtonLoading(true, form);
            
            const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
            
            const result = await response.json();
            
            if (response.ok) {
              // Show success message by toggling visibility
              formSection.classList.add('hidden');
              successSection.classList.remove('hidden');
            } else {
              console.error('HubSpot submission error:', result);
              this.showFormResponse(form, false, "There was an error with your submission. Please try again.");
            }
          } catch (error) {
            console.error('Form submission error:', error);
            this.showFormResponse(form, false, "An unexpected error occurred. Please try again later.");
          } finally {
            this.toggleSubmitButtonLoading(false, form);
          }
        });
      }
    },
    
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    },
    
    toggleSubmitButtonLoading(isLoading, form) {
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        if (isLoading) {
          submitButton.disabled = true;
          submitButton.dataset.originalText = submitButton.textContent;
          submitButton.textContent = "Submitting...";
        } else {
          submitButton.disabled = false;
          submitButton.textContent = submitButton.dataset.originalText || "Submit";
        }
      }
    },
    
    showFormResponse(form, isSuccess, message) {
      const existingResponse = form.querySelector('.form-response');
      if (existingResponse) {
        existingResponse.remove();
      }
      
      const responseElement = document.createElement('div');
      responseElement.className = `form-response mt-4 p-3 rounded ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
      responseElement.textContent = message;
      
      const submitButton = form.querySelector('button[type="submit"]').parentNode;
      submitButton.insertAdjacentElement('afterend', responseElement);
    }
  }
}
</script> 