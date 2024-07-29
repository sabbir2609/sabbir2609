export default function Contact() {
    return (
        <section className="max-w-2xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg min-h-[92vh] content-center">
            <h1 className="text-4xl font-bold text-center text-primary mb-6">Contact Me</h1>
            <form className="space-y-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-700 font-semibold">Name</span>
                    </label>
                    <input className="input input-bordered w-full" type="text" placeholder="Your Name" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-700 font-semibold">Email</span>
                    </label>
                    <input className="input input-bordered w-full" type="email" placeholder="Your Email" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-700 font-semibold">Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Your Message"></textarea>
                </div>
                <button className="btn btn-primary w-full">Send</button>
            </form>
        </section>
    );
}