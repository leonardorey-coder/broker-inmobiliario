
import { FEED_POSTS } from '../data/mock';
import { X, Heart, MessageCircle, Bookmark } from 'lucide-react';

const FeedModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex justify-center items-start overflow-y-auto animate-fade-in">

            <button onClick={onClose}
                className="fixed top-6 right-6 text-white hover:text-amber-500 transition-colors z-50 bg-black/50 p-2 rounded-full">
                <X size={32} />
            </button>

            <div className="w-full max-w-md py-10 px-4 animate-slide-up">
                <h2 className="text-amber-500 font-bold tracking-[0.2em] text-center mb-8 uppercase text-sm">Social Feed</h2>

                <div className="space-y-8">
                    {FEED_POSTS.map((post) => (
                        <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-2xl">
                            <div className="p-3 flex items-center gap-3 border-b border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-white p-[1px]">
                                        <img src={post.image} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                </div>
                                <span className="font-bold text-sm text-gray-900">luxrealty.cancun</span>
                            </div>

                            <div className="aspect-square bg-gray-100">
                                <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                            </div>

                            <div className="p-4">
                                <div className="flex gap-3 mb-3">
                                    <button
                                        className="hover:text-amber-500 hover:scale-110 transition-all cursor-pointer text-gray-800">
                                        <Heart size={24} />
                                    </button>
                                    <button
                                        className="hover:text-amber-500 hover:scale-110 transition-all cursor-pointer text-gray-800">
                                        <MessageCircle size={24} />
                                    </button>
                                    <button
                                        className="hover:text-amber-500 hover:scale-110 transition-all cursor-pointer ml-auto text-gray-800">
                                        <Bookmark size={24} />
                                    </button>
                                </div>

                                <div className="mb-2">
                                    <span className="font-bold text-sm text-gray-900">{post.likes} Me gusta</span>
                                </div>

                                <div className="text-sm text-gray-800 mb-2">
                                    <span className="font-bold mr-2">luxrealty.cancun</span>
                                    {post.caption}
                                </div>

                                <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                                    {post.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 pb-8">
                    <button onClick={onClose}
                        className="text-white/50 hover:text-white text-sm uppercase tracking-widest transition-colors">
                        Cerrar Feed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedModal;