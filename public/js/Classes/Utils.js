export default class Utils {
    // ---
    static LoadingStart() {
        document.getElementById("loading").classList.remove("invisible");
    }
    // ---
    static LoadingEnd() {
        document.getElementById("loading").classList.add("invisible");
    }
    // ---
    static Confirmation() {
        document.getElementById("customer-save-success-alert").classList.remove("invisible");

        setTimeout(() => {
            document.getElementById("customer-save-success-alert").classList.add("invisible");
        }, 4000);
    }
    // ---
}